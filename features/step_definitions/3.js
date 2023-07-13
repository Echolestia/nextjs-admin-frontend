const { Given, When, Then, After } = require("@cucumber/cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");

let browser, page;


Given("admin is in the create articles page", async () => {
  // You'll replace this with your actual "Create Articles" page URL
  const createArticlePageUrl = "https://admindashboard-xnabw36hha-as.a.run.app/articles/new";

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
  const createArticlePageUrl = "https://admindashboard-xnabw36hha-as.a.run.app/articles/new";


  expect(await page.url()).to.equal(createArticlePageUrl);
});

After(async function() {
  await browser.close();
});


