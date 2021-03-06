require('dotenv').config();

const puppeteer = require('puppeteer');
const { MAIL } = process.env;
const { PASSWORD } = process.env;
const { FOLDERPATHPC } = process.env;

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 500,
  })
  const page = await browser.newPage();
  await page.goto('https://pc.moppy.jp/');

  await page.click(".login > a");
  await page.type("input[name='mail']", MAIL);
  await page.type("input[name='pass']", PASSWORD);
  await page.click(".m-btn-form__item > button");
  
  await page.click(".modal-top__later");
  await page.click("#pc_pm_gacha > a");
  await page.click("#premium-stamp-card > a");
})();