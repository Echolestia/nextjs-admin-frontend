const { Given, When, Then} = require("@cucumber/cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");
const { Keyboard } = require('puppeteer');

let browser, page;

Given("the admin is in a chat", {timeout: 60 * 1000}, async function () {
    console.log('running 9')
    // Confirm that the admin is actually in a chat page
    // You can check for an element that only appears on the chat page
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

    await page.waitForSelector('[data-testid="chatroom-1"]');

    // Click the first chat in the list
    await page.click('[data-testid="chatroom-1"]');
});

When("the admin fills in the 'Type your message here' field and press enter", {timeout: 60 * 1000}, async function () {
    const message = 'Hello World';

    // Fill the message into the input field
    await page.waitForTimeout(2000);
    await page.waitForSelector('.unique-classForTesting'); // replaced with actual selector
    await page.type('.unique-classForTesting', message); // replaced with actual selector
    await page.keyboard.press('Enter');
});

Then("the admin should see the message appear in the chat", {timeout: 60 * 1000}, async function () {
    // Query all chat messages
    const chatMessages = await page.$$('[data-testid="chat-item"]');

    // Function that will retrieve the inner text content of a node
    const parseMessage = async (messageNode) => await (await messageNode.getProperty('textContent')).jsonValue();

    // Get a list of all visible chat messages text content
    const messagesTextContent = await Promise.all(chatMessages.map(parseMessage));

    // If the input message is in the list of visible messages
    const messageFound = messagesTextContent.includes('Hello World');

    console.log(`Message found in chat? ${messageFound}`);   // If 'Hello World' is present, it will print true else false
});

