const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");

let browser, page;

// 1 - Viewing 'Chat' tab with active chats
Given("an admin lands in the admin dashboard and clicks on 'Chat' button", async function () {
    console.log('running 7')
    browser = await puppeteer.launch({headless:false});
    page = await browser.newPage();
    await page.goto('http://localhost:3000/login',{ waitUntil: 'networkidle0', timeout: 60000 });  // replace with your login/signup page url
    await page.type('#normal_login_email', 'admin');
    await page.type('#normal_login_password', 'admin');
    const loginButtonSelector = '[data-testid="login-button"]'; // replace with your button selector
    await Promise.all([
        page.click(loginButtonSelector), // Triggers navigation
        page.waitForNavigation({ waitUntil: 'networkidle0' })  // Waits until navigation finishes
    ]);
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


