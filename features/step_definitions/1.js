const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");

let browser, page;


//1
Given("an admin lands in the admin dashboard for the first time", {timeout: 60 * 1000}, async () => {
  console.log('running 1')
  browser = await puppeteer.launch({headless:false});
  page = await browser.newPage();

  await page.goto("https://admindashboard-xnabw36hha-as.a.run.app", { waitUntil: 'networkidle0', timeout: 60000 });

});


When("the admin click on the 'View Articles' tab for the first time", async () => {
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

//modify when the app is modify such that the article page is empty.
Then("the admin should see the text 'You have no articles, please create a new article!'", async () => {

  const pageContent = await page.content(); // gets all the content in the page

  // console.log(pageContent)

  // Normalize the page content to remove leading/trailing whitespaces
  const normalizedPageContent = pageContent.trim();

  if (!normalizedPageContent.includes('You have no articles, please create a new article!')) {
    throw new Error('The expected text does not exist!');
  }
});




