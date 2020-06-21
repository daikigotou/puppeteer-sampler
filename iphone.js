require('dotenv').config();

const puppeteer = require('puppeteer');
const iPhone = puppeteer.devices['iPhone 8'];
const { MAIL } = process.env;
const { PASSWORD } = process.env;
const { FOLDERPATH } = process.env;

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 500
  })
  const page = await browser.newPage();
  await page.emulate(iPhone);
  await page.goto('https://pc.moppy.jp/');

  await page.click(".login > a");
  await page.type("input[name='mail']", MAIL);
  await page.type("input[name='pass']", PASSWORD);
  await page.click(".m-btn-form__item > button");
  
  await page.click("#modalTop_later");
  await page.click(".cfx > .js-block > li:nth-child(5) > a");

  await page.click(".a-moppy-gacha__btn");
  await page.click(".a-moppy-gacha__btn");
  await page.click(".popup-block__delete");
  // page.waitFor(".click-end > a");
  const newPagePromise = new Promise(resolve => browser.once('targetcreated', target => resolve(target.page())));
  await page.click(".m-moppy-gacha__get-banner > a");
  const newPage = await newPagePromise;
  await newPage.emulate(iPhone);

  await page.screenshot({path: FOLDERPATH});

  await browser.close();
})();