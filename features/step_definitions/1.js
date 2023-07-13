const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");

let browser, page;

//1
Given("an admin lands in the admin dashboard for the first time", {timeout: 60 * 1000}, async () => {
  try {
    browser = await puppeteer.launch( {headless:false} );
    page = await browser.newPage();
    console.log(page);
    await page.goto("https://admindashboard-xnabw36hha-as.a.run.app", { waitUntil: 'networkidle0', timeout: 60000 });
  } catch (error) {
    console.error(error);
  }
});

// When("the admin click on the 'Create Articles' tab", async () => {
//   console.log(page); // to the Given function, When function and Then function
//   const articlesParentTabSelector = '[data-testid="articles-icon"]';
//   const articlesTabSelector = '[data-testid="create-articles-tab"]';
//   //await page.waitForSelector(articlesTabSelector);
//   console.log("Hovering over Articles tab...");
//   await page.waitForSelector(articlesParentTabSelector);
//   await page.hover(articlesParentTabSelector);
//   console.log("Waiting for Create Articles tab to be visible...");
//   await page.waitForSelector(articlesTabSelector, { timeout: 10000 });
//   console.log("Clicking on Create Articles tab...");
//   await page.click(articlesTabSelector);
//   console.log("Tab clicked successfully.");
// });

When("the admin click on the 'View Articles' tab for the first time", {timeout: 60 * 1000}, async () => {
  const articlesParentTabSelector = '[data-testid="articles-icon"]';
  const articlesTabSelector = '[data-testid="view-articles-tab"]';
  console.log("Current Page URL: ", await page.url());
  console.log("Hovering over Articles tab...");
  await page.waitForSelector(articlesParentTabSelector);
  await page.hover(articlesParentTabSelector);
  console.log("Waiting for View Articles tab to be visible...");
  await page.waitForSelector(articlesTabSelector, { timeout: 10000 });
  console.log("Clicking on View Articles tab...");
  try {
    // Performs the click
    await page.click(articlesTabSelector);
    // add a delay after click
    await page.waitForTimeout(6000);
    // Waits for the navigation event to complete
    await page.waitForNavigation({ timeout: 30000, waitUntil: 'networkidle2' });
  } catch (error) {
    console.error(`Error clicking on the tab: ${error}`);
  }
  console.log("Tab clicked successfully.");
  console.log("Current Page URL: ", await page.url());
});

//modify when the app is modify such that the article page is empty.
Then("the admin should see the text 'You have no articles, please create a new article!'", async () => {
  // await page.goto("https://admindashboard-xnabw36hha-as.a.run.app/articles", { waitUntil: 'networkidle0', timeout: 60000 });

  const pageContent = await page.content(); // gets all the content in the page

  // console.log(pageContent)

  // Normalize the page content to remove leading/trailing whitespaces
  const normalizedPageContent = pageContent.trim();

  if (!normalizedPageContent.includes('You have no articles, please create a new article!')) {
    throw new Error('The expected text does not exist!');
  }
});

After(async function() {
  await browser.close();
});


