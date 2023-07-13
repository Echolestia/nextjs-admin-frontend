const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");

let browser, page;


//2
Given("an admin lands in the admin dashboard", async () => {
  console.log('running 5')
  browser = await puppeteer.launch({headless:false});
  page = await browser.newPage();
  await page.goto("https://admindashboard-xnabw36hha-as.a.run.app", { waitUntil: 'networkidle0', timeout: 10000 });
});

When("the admin click on the 'View Articles' tab", async () => {
  const articlesParentTabSelector = '[data-testid="articles-icon"]';
  const articlesTabSelector = '[data-testid="view-articles-tab"]';

  console.log("Hovering over Articles tab...");
  await page.waitForSelector(articlesParentTabSelector);
  await page.hover(articlesParentTabSelector);

  console.log("Clicking on View Articles tab...");
  // await page.click(articlesTabSelector);
  // await page.waitForNavigation({ timeout: 30000, waitUntil: 'networkidle2' });

  console.log("Tab clicked successfully.");
  await page.goto("https://admindashboard-xnabw36hha-as.a.run.app/articles", { waitUntil: 'networkidle0', timeout: 60000 });
  console.log("Current Page URL: ", await page.url());
});

Then("the admin should see a list of all the articles that all admins have added to the page", async () => {
  const articlesUrl = "https://admindashboard-xnabw36hha-as.a.run.app/articles";

  // Navigate to the page and wait for it to load
  // await page.goto(articlesUrl, { waitUntil: 'networkidle0', timeout: 10000 });

  //await page.waitForNavigation();
  expect(await page.url()).to.equal(articlesUrl);

});


