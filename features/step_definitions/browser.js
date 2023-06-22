const puppeteer = require("puppeteer");

let browser;
let page;

const launchBrowser = async () => {
  browser = await puppeteer.launch({ headless: true });
  page = await browser.newPage();
};

const closeBrowser = async () => {
  await browser.close();
};

module.exports = { launchBrowser, closeBrowser, browser, page };