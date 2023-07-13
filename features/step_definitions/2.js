const { Given, When, Then, After } = require("@cucumber/cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");

let browser, page;

//2
Given("admin goes to create article page",  {timeout: 60 * 1000}, async () => {
  browser = await puppeteer.launch({headless:false});
  page = await browser.newPage();
  await page.goto("https://admindashboard-xnabw36hha-as.a.run.app/articles/new", { waitUntil: 'networkidle0', timeout: 60000 });
});

Then("the admin should see a form to create articles", async () => {
  const articlesUrl = "https://admindashboard-xnabw36hha-as.a.run.app/articles/new";

  // Navigate to the page and wait for it to load
  await page.goto(articlesUrl, { waitUntil: 'networkidle0', timeout: 10000 });

  //await page.waitForNavigation();
  expect(await page.url()).to.equal(articlesUrl);

  // Close the browser after the test
  browser.close();
});
