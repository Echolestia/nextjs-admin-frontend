const { Given, When, Then, After } = require("@cucumber/cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");

let browser, page;

// 1 - Viewing 'Chat' tab with active chats
Given("an admin lands in the admin dashboard and clicks on 'Chat' button", async function () {
    browser = await puppeteer.launch({headless:false});
    page = await browser.newPage();
    await page.goto('https://admindashboard-xnabw36hha-as.a.run.app');
    console.log("Current Page URL: ", await page.url());
    const submitSelector = '[data-testid="chat-tab"]';
    await page.waitForSelector(submitSelector);
    const navigationPromise = page.waitForNavigation(); // Start listening to the navigation event
    await page.click(submitSelector);
    await navigationPromise; // Wait for the navigation to complete
    console.log("Current Page URL: ", await page.url());
});

Then("the admin should see a list of all the active chats under the 'Chat' tab", async function () {
    console.log("Current Page URL: ", await page.url());
    const chatElements = await page.$$('li');
    console.log(chatElements.length)
    expect(chatElements.length).to.be.above(0);
});

After(async function() {
    await browser.close();
  });
