const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");

let browser, page;



Given("admin is in the create articles page", async () => {
  console.log('running 3')
  browser = await puppeteer.launch({headless:false});
  page = await browser.newPage();
  // You'll replace this with your actual "Create Articles" page URL
  const createArticlePageUrl = "http://localhost:3000/articles/new";

  browser = await puppeteer.launch({headless:false});
  page = await browser.newPage();
  await page.goto(createArticlePageUrl, { waitUntil: 'networkidle0', timeout: 60000 });
});

When('admin clicks submit now', async () => {
  const submitSelector = '[data-testid="submit-article-button"]';
  await page.waitForSelector(submitSelector);
  await page.click(submitSelector);
});

Then("admin will still be in the create articles page", async () => {
  const createArticlePageUrl = "http://localhost:3000/articles/new";


  expect(await page.url()).to.equal(createArticlePageUrl);
});



