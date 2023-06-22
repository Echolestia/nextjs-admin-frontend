const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { expect } = require("chai");
// const { page } = require("./browser.js"); // Import Puppeteer page object
const { world } = require("./world.js");
const puppeteer = require("puppeteer");

const ADMIN_DASHBOARD_URL = "http://localhost:3000/"; // Replace with your dashboard URL
const noArticlesTextSelector = "#noArticlesText"; // Replace with your no articles text selector

let page;
setDefaultTimeout(10000)

Given("an admin lands in the admin dashboard for the first time", async () => {
  const browser = await puppeteer.launch({headless: false});
  page = await browser.newPage();
  await page.goto(`${ADMIN_DASHBOARD_URL}articles`);
});

Then("the admin should see the text 'You have no articles, please create a new article!'", async () => {
  const pageInstance = await page;
  await pageInstance.waitForSelector(noArticlesTextSelector);
  // Get the text of the selector using page.$eval()
  const noArticlesText = await pageInstance.$eval(noArticlesTextSelector, el => el.textContent); 
  
  expect(noArticlesText).to.contain("You have no articles, please create a new article!");
  
});

// Given("is in the 'Chat' tab", async () => {
//   const pageInstance = await page;
//   await pageInstance.goto("http://localhost:3000/articles");
// });

// When("the admin hovers over the 'Articles' tab", async () => {
//   const pageInstance = await page;
//   await pageInstance.hover(articlesTabSelector);
// });

// When("the admin clicks on the 'View Articles' button", async () => {
//   const pageInstance = await page;
//   await pageInstance.click(viewArticlesButtonSelector);
// });