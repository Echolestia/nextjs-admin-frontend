const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");

let browser, page;

//1
Given("admin is at the articles page", async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto("https://admindashboard-xnabw36hha-as.a.run.app/articles", { waitUntil: 'networkidle0', timeout: 60000 });
});

When("the admin click on the 'Create Articles' tab", async () => {
  const articlesParentTabSelector = '[data-testid="articles-icon"]';
  const articlesTabSelector = '[data-testid="create-articles-tab"]';
  //await page.waitForSelector(articlesTabSelector);
  console.log("Hovering over Articles tab...");
  await page.waitForSelector(articlesParentTabSelector);
  await page.hover(articlesParentTabSelector);
  console.log("Waiting for Create Articles tab to be visible...");
  await page.waitForSelector(articlesTabSelector, { timeout: 10000 });
  console.log("Clicking on Create Articles tab...");
  await page.click(articlesTabSelector);
  console.log("Tab clicked successfully.");
});

//modify when the app is modify such that the article page is empty.
Then("the admin should see the text 'You have no articles, please create a new article!'", async () => {
  // const articlesUrl = "https://admindashboard-xnabw36hha-as.a.run.app/articles"; // Replace with your URL
  // await page.goto(articlesUrl, { waitUntil: 'networkidle0', timeout: 10000 });

  // Wait a bit before getting page content
  // await page.waitForTimeout(3000);

  const pageContent = await page.content(); // gets all the content in the page

  // Normalize the page content to remove leading/trailing whitespaces
  const normalizedPageContent = pageContent.trim();

  if (!normalizedPageContent.includes('You have no articles, please create a new article!')) {
    throw new Error('The expected text does not exist!');
  }
});
