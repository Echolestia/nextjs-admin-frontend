const { Given, When, Then, setDefaultTimeout, Before, After } = require("@cucumber/cucumber");
const { expect } = require("chai");
const { launchBrowser, closeBrowser, browser } = require("./browser.js");
const puppeteer = require("puppeteer");

const viewArticlesUrl = "http://localhost:3000/articles";
const createArticlePageUrl = "http://localhost:3000/create-article"; // Update with the correct URL for the Create Article page
const visitLinkButtonSelector = "[data-testid='visit-article-button']";

let page;

// Before(async () => {
//   await launchBrowser();
// });

// After(async () => {
//   await closeBrowser();
// });

// For Scenario 2

// Given("an admin lands on the 'View Articles' page with articles", async () => {
//     const browser = await puppeteer.launch({headless: true});
//     page = await browser.newPage();
//     await page.goto(viewArticlesUrl);
//   });
  
//   Then("the admin should see a list of all the articles that all admins have added to the page", async () => {
//     // Check if there are articles on the page
//     const noArticlesContainer = await page.$(noArticlesTextContainer) === null;
//     expect(noArticlesContainer).to.be.true;
//   });
  
//   // For Scenario 3
  
//   Given("an admin is on the 'View Articles' page of the admin dashboard with articles", async () => {
//     await page.goto(viewArticlesUrl);
//   });
  
//   When("the admin clicks on the 'Visit Link' button", async () => {
//     const [newTab] = await Promise.all([
//       new Promise(resolve => browser.once('targetcreated', target => resolve(target.page()))),
//       page.click(visitLinkButtonSelector)
//     ]);
  
//     // Close the new tab after it is opened
//     await newTab.close();
//   });
  
//   Then("the admin is redirected to the article's original URL in a new browser tab", async () => {
//     // The new tab is opened and closed in the previous step
//   });
  
  // For Scenario 4
  
// For Scenario 4

Given("an admin is in the 'Create Article' tab of the admin dashboard", async () => {
  // Assuming you have separate URLs for Chat and Articles tabs
  const browser = await puppeteer.launch({headless: false});
  page = await browser.newPage();
  const chatTabUrl = "http://localhost:3000/articles/new"; // Update this with the correct URL for the Chat page
  await page.goto(chatTabUrl);
});

const createArticleFormTitle = "h1";

Then("the admin should see a form to create articles", async () => {
  await page.waitForSelector(createArticleFormTitle);
  const formTitle = await page.$eval(createArticleFormTitle, el => el.textContent);
  expect(formTitle).to.equal("Add an Article"); // Use the text from your React component
});

Given("lesgoo", async () => {
  // Assuming you have separate URLs for Chat and Articles tabs
  const browser = await puppeteer.launch({headless: false});
  page = await browser.newPage();
  const chatTabUrl = "http://localhost:3000/articles/new"; // Update this with the correct URL for the Chat page
  await page.goto(chatTabUrl);
});


Then("lesgooo", async () => {
  await page.waitForSelector(createArticleFormTitle);
  const formTitle = await page.$eval(createArticleFormTitle, el => el.textContent);
  expect(formTitle).to.equal("Add an Article"); // Use the text from your React component
});