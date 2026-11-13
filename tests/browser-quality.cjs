const assert = require("node:assert/strict");
const { chromium } = require("playwright");
const base = process.env.PULSEFIT_TEST_URL || "http://127.0.0.1:5173";
(async () => {
  const browser = await chromium.launch({headless:true});
  try {
    for (const width of [320,390,1280]) {
      for (const colorScheme of ["light","dark"]) {
        const context = await browser.newContext({viewport:{width,height:850},colorScheme});
        const page = await context.newPage();
        const errors = [];
        page.on("pageerror", e => errors.push(e.message));
        await page.goto(base + "/library", {waitUntil:"domcontentloaded"});
        await page.waitForSelector("#exerciseSearch");
        assert.equal(new URL(page.url()).pathname,"/library");
        assert.equal(await page.locator('[data-target="library"]').getAttribute("aria-current"),"page");
        await page.locator('[data-target="progress"]').click();
        assert.equal(new URL(page.url()).pathname,"/progress");
        await page.goBack();
        assert.equal(new URL(page.url()).pathname,"/library");
        await page.goForward();
        assert.equal(new URL(page.url()).pathname,"/progress");
        await page.reload();
        assert.equal(await page.locator('[data-target="progress"]').getAttribute("aria-current"),"page");
        assert.equal(await page.locator(".skip-link").count(),1);
        const widthOk = await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 2);
        assert.equal(widthOk,true, "horizontal overflow "+width+" "+colorScheme);
        await page.evaluate(() => localStorage.setItem("pulsefit2","{invalid-backup"));
        await page.reload();
        await page.locator('[data-water="250"]').count();
        await page.locator('[data-target="today"]').click();
        await page.locator('[data-water="250"]').click();
        assert.equal(await page.evaluate(() => localStorage.getItem("pulsefit2")),"{invalid-backup");
        const toast = await page.locator("#toast").textContent();
        assert.match(toast, /not fully saved/i);
        assert.deepEqual(errors,[], "uncaught errors "+width+" "+colorScheme);
        await context.close();
        console.log("PASS viewport="+width+" theme="+colorScheme+" routes, history, preservation, status");
      }
    }
  } finally { await browser.close(); }
})().catch(err => { console.error(err);process.exitCode=1; });
