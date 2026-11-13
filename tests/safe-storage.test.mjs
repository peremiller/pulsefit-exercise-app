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
