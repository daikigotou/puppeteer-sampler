const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,  // 動作確認するためheadlessモードにしない
    slowMo: 500  // 動作確認しやすいようにpuppeteerの操作を遅延させる
  })
  const page = await browser.newPage();
  await page.goto('https://pc.moppy.jp/');

  await page.click(".login > a");
  await page.type("input[name='mail']", "daiki.7634@gmail.com");
  await page.type("input[name='pass']", "7634");
  await page.click(".m-btn-form__item > button");
  
  await page.click(".modal-top__later");
  await page.click("#pc_pm_gacha > a");

  await page.click(".a-normal-gacha__btn");
  await page.click(".layer-3 > .ver > img");
  page.waitFor(".click-end > a");
  // const adchk = await page.evaluate(()=> {
  //   const node = document.querySelector(".delete > a");
  //   return node.length ? false : true;
  // });
  // if (!adchk) {
  //   await page.click(".delete > a");
  // }
  await page.click(".click-end > a");
  
  page.waitFor(10000);
  await page.click(".delete > a");
  await page.click(".banner > a");

  await page.screenshot({path: '/Users/gotoudaiki/Pictures/screenshot.png'});

  await browser.close();
})();