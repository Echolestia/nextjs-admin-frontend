const { Given, When, Then, After } = require("@cucumber/cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");
const { Keyboard } = require('puppeteer');

let browser, page;

Given("the admin is in a chat again", {timeout: 60 * 1000}, async function () {
    // Confirm that the admin is actually in a chat page
    // You can check for an element that only appears on the chat page
    browser = await puppeteer.launch({headless:false});
    page = await browser.newPage();
    await page.goto('https://admindashboard-xnabw36hha-as.a.run.app/chat');

    await page.waitForSelector('replace with correct chat tab selector');
    console.log('Valid')
    // Retrieve all list items ('li' elements)
    const chats = await page.$$('replace with correct chat tab selector');
    if (chats.length === 0) {
        throw new Error('No chats found.');
    }

    // Click the first chat in the list
    await chats[0].click();

    // Add a delay if the element takes time to appear
    await page.waitForTimeout(1000);

    // Check if the desired element(s) appeared after the click
    // Replace '.desired-element' with the selector of the element you want to check
    console.log('Seeing if pop up exist')
    await page.waitForSelector('.ant-card-head-title');
});

When("the admin has not input anything into 'Type your message here' field", {timeout: 60 * 1000}, async function () {
  const inputValue = await page.evaluate(() => document.querySelector('.ant-input.css-1q11svj').value);
  if (inputValue !== '') {
      throw new Error('Message input field is not empty');
  }
});


Then("the admin should not be able to send a new message when clicked on 'send'", {timeout: 60 * 1000}, async function () {
  // Replace 'your-chat-messages-selector' with the selector for your chat message list
  const chatMessagesBefore = await page.$eval('.ant-typography.css-1q11svj', el => el.outerHTML);

  // Click the send button
  await page.click('button.ant-btn.css-1q11svj.ant-btn-primary:contains("Send")');

  // Waiting a little bit for any potential but unwanted change
  await page.waitForTimeout(1000);

  const chatMessagesAfter = await page.$eval('.ant-typography.css-1q11svj', el => el.outerHTML);

  // Asserting that the message list hasn't changed
  assert.strictEqual(chatMessagesBefore, chatMessagesAfter, 'The chat messages should not change after trying to send an empty message');
});

After(async function() {
  await browser.close();
});
