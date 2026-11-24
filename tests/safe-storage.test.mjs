import test from "node:test";
import assert from "node:assert/strict";
import { createSafeStorage } from "../safe-storage.js";

function browserStore(initial = {}, failSet = false) {
  const data = new Map(Object.entries(initial));
  const io = {
    getItem(key) { return data.has(key) ? data.get(key) : null; },
    setItem(key, value) { if (failSet) throw Error("quota"); data.set(key, value); },
  };
  return { data, io };
}

test("valid prior workouts, activity, challenge, favorites and movement counters load without writes", () => {
  const seed = {pulsefit2:'[{"name":"Morning walk","date":100}]',pf_ch:'{"month":[1,3]}',pf_favorites:'["bird-dog"]',pf_completed_movements:"2"};
  const {io,data} = browserStore(seed);
  const store = createSafeStorage(() => io);
  assert.equal(store.read("pulsefit2",[])[0].name,"Morning walk");
  assert.deepEqual(store.read("pf_ch",{}).month,[1,3]);
  assert.deepEqual(store.read("pf_favorites",[]),["bird-dog"]);
  assert.equal(store.read("pf_completed_movements",0),2);
  assert.equal(data.size,4);
});
test("malformed JSON survives later unrelated saves byte-for-byte", () => {
  const original = "{unfinished";
  const {io,data}=browserStore({pulsefit2:original,pf_cardio:"[]"});
  const store=createSafeStorage(()=>io);
  assert.deepEqual(store.read("pulsefit2",[]),[]);
  assert.equal(store.saveMany({pulsefit2:[{name:"new"}],pf_cardio:[{type:"Walk"}]}),false);
  assert.equal(data.get("pulsefit2"),original);
  assert.equal(data.get("pf_cardio"),'[{"type":"Walk"}]');
});
test("wrong shapes and malformed nested challenges are protected",()=>{
  const {io,data}=browserStore({pf_cardio:"{}",pf_ch:'{"x":"not an array"}',pf_water:'{"d":"a","ml":"NaN"}'});
  const store=createSafeStorage(()=>io);
  assert.deepEqual(store.read("pf_cardio",[]),[]);
  assert.deepEqual(store.read("pf_ch",{}),{});
  assert.deepEqual(store.read("pf_water",{d:"",ml:0}),{d:"",ml:0});
  assert.equal(store.saveMany({pf_cardio:[],pf_ch:{},pf_water:{d:"today",ml:250}}),false);
  assert.equal(data.get("pf_cardio"),"{}");
  assert.equal(data.get("pf_ch"),'{"x":"not an array"}');
});
test("an empty store is not written during initial reads",()=>{
  const {io,data}=browserStore();
  const store=createSafeStorage(()=>io);
  assert.deepEqual(store.read("pulsefit2",[]),[]);
  assert.equal(store.read("pf_completed_movements",0),0);
  assert.equal(data.size,0);
});
test("restricted storage on read does not crash or create fake saves",()=>{
  const store=createSafeStorage(()=>{throw Error("SecurityError")});
  assert.deepEqual(store.read("pf_favorites",[]),[]);
  assert.equal(store.saveMany({pf_favorites:["a"]}),false);
  assert.equal(store.inaccessible,true);
});
test("quota failure reports false and leaves existing bytes untouched",()=>{
  const {io,data}=browserStore({pf_body:'[{"w":70}]'},true);
  const store=createSafeStorage(()=>io);
  assert.deepEqual(store.read("pf_body",[]),[{w:70}]);
  assert.equal(store.saveMany({pf_body:[{w:72}]}),false);
  assert.equal(data.get("pf_body"),'[{"w":70}]');
});
test("nullable and nonfinite counters are protected instead of propagating invalid state",()=>{
  const {io,data}=browserStore({pf_completed_movements:"null"});
  const store=createSafeStorage(()=>io);
  assert.equal(store.read("pf_completed_movements",0),0);
  assert.equal(store.saveMany({pf_completed_movements:1}),false);
  assert.equal(data.get("pf_completed_movements"),"null");
});

test("newer changes in another tab are protected while independent records still save", () => {
  const {io,data} = browserStore({pf_favorites:'["older"]',pf_cardio:"[]"});
  const store=createSafeStorage(()=>io);
  assert.deepEqual(store.read("pf_favorites",[]),["older"]);
  assert.deepEqual(store.read("pf_cardio",[]),[]);
  data.set("pf_favorites",'["updated-in-other-tab"]');
  assert.equal(store.saveMany({pf_favorites:["older","new"],pf_cardio:[{type:"Walk"}]}),false);
  assert.equal(data.get("pf_favorites"),'["updated-in-other-tab"]');
  assert.equal(data.get("pf_cardio"),'[{"type":"Walk"}]');
  assert.equal(store.protectedKeys.has("pf_favorites"),true);
  assert.equal(store.saveMany({pf_favorites:[],pf_cardio:[]}),false);
  assert.equal(data.get("pf_favorites"),'["updated-in-other-tab"]');
});

test("unserializable progress does not permanently disable browser storage", () => {
  const { io, data } = browserStore({ pf_cardio: "[]", pf_favorites: '["existing"]' });
  const store = createSafeStorage(() => io);
  store.read("pf_cardio", []);
  store.read("pf_favorites", []);
  const cycle = []; cycle.push(cycle);
  assert.equal(store.saveMany({ pf_cardio: cycle, pf_favorites: ["existing", "new"] }), false);
  assert.equal(store.inaccessible, false);
  assert.equal(data.get("pf_cardio"), "[]");
  assert.equal(data.get("pf_favorites"), '["existing","new"]');
  assert.equal(store.saveMany({ pf_cardio: [{ type: "Walk" }] }), true);
  assert.equal(data.get("pf_cardio"), '[{"type":"Walk"}]');
});

test("BigInt serialization errors do not erase the existing workout or other records", () => {
  const { io, data } = browserStore({ pf_completed_movements: "3", pf_favorites: "[]" });
  const store = createSafeStorage(() => io);
  store.read("pf_completed_movements", 0);
  store.read("pf_favorites", []);
  assert.equal(store.saveMany({ pf_completed_movements: 4n, pf_favorites: ["saved"] }), false);
  assert.equal(store.inaccessible, false);
  assert.equal(data.get("pf_completed_movements"), "3");
  assert.equal(data.get("pf_favorites"), '["saved"]');
});

test("successive saves from this tab update the concurrency baseline", () => {
  const {io,data}=browserStore();
  const store=createSafeStorage(()=>io);
  store.read("pf_favorites",[]);
  assert.equal(store.saveMany({pf_favorites:["a"]}),true);
  assert.equal(store.saveMany({pf_favorites:["a","b"]}),true);
  assert.equal(data.get("pf_favorites"),'["a","b"]');
  assert.equal(store.protectedKeys.size,0);
});


test("silently rejected storage write reports failure and retains the last confirmed baseline", () => {
  const {io,data}=browserStore({pf_favorites:'["old"]',pf_cardio:"[]"});
  const write=io.setItem;
  let reject=true;
  io.setItem=(key,value)=>{if (!(reject && key==="pf_favorites")) write(key,value);};
  const store=createSafeStorage(()=>io);
  store.read("pf_favorites",[]); store.read("pf_cardio",[]);
  assert.equal(store.saveMany({pf_favorites:["new"],pf_cardio:[{type:"Walk"}]}),false);
  assert.equal(data.get("pf_favorites"),'["old"]');
  assert.equal(data.get("pf_cardio"),'[{"type":"Walk"}]');
  reject=false;
  assert.equal(store.saveMany({pf_favorites:["new"]}),true);
  assert.equal(data.get("pf_favorites"),'["new"]');
});
