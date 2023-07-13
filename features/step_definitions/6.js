const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");
const { Keyboard } = require('puppeteer');

let browser, page;


Given("an admin is in the 'View Articles' page of the admin dashboard", async () => {
  // You'll replace this with your actual "Create Articles" page URL
  const createArticlePageUrl = "https://admindashboard-xnabw36hha-as.a.run.app/articles";

  browser = await puppeteer.launch({headless:false});
  page = await browser.newPage();
  console.log('loading...')
  await page.goto(createArticlePageUrl, { waitUntil: 'networkidle0', timeout: 60000 });
  console.log('done...')
});

When("the admin clicks on the 'Visit Link' button", async function () {
  const visitlinkTabSelector = '[data-testid="visit-article-button"]';
  await page.waitForSelector(visitlinkTabSelector);
  console.log("waiting for visit link button")
  await page.click(visitlinkTabSelector);
  console.log("clicked successfully.");

});

Then("the admin is redirected to the article's original URL in a new browser tab", async () => {
  // Wait for a new target (tab) to be created
  const newTarget = await browser.waitForTarget((target) => target.opener() === page.target());

  // Assert that a new target (tab) is opened
  expect(newTarget).to.exist;
  console.log("opened article tab!");
});

After(async function() {
  await browser.close();
});
