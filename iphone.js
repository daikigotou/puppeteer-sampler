require('dotenv').config();

const puppeteer = require('puppeteer');
const iPhone = puppeteer.devices['iPhone X'];
const { MAIL } = process.env;
const { PASSWORD } = process.env;
const { FOLDERPATHIPHONE } = process.env;

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
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
  await page.screenshot({
    path: FOLDERPATHIPHONE,
    fullPage: true,
  });
  
  const newPage = await browser.newPage();
  await newPage.emulate(iPhone);
  await newPage.goto('https://pc.moppy.jp/pc_gacha/ad_click.php');

  await browser.close();
})();