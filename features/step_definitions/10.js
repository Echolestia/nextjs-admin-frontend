// const { Given, When, Then } = require("@cucumber/cucumber");
// const { expect } = require("chai");
// const puppeteer = require("puppeteer");
// const { Keyboard } = require('puppeteer');

// let browser, page;

// Given("the admin is in a chat again", {timeout: 60 * 1000}, async function () {
//     console.log('running 10')
//     // Confirm that the admin is actually in a chat page
//     // You can check for an element that only appears on the chat page
//     browser = await puppeteer.launch({headless:false});
//     page = await browser.newPage();
//     await page.goto('http://localhost:3000/chat');

//     await page.waitForSelector('[data-testid="chatroom-1"]');

//     // Click the first chat in the list
//     await page.click('[data-testid="chatroom-1"]');
// });

// When("the admin has not input anything into 'Type your message here' field", {timeout: 60 * 1000}, async function () {
//   const inputValue = await page.evaluate(() => document.querySelector('.ant-input.css-1q11svj').value);
//   if (inputValue !== '') {
//       throw new Error('Message input field is not empty');
//   }
// });


// Then("the admin should not be able to send a new message when clicked on 'send'", {timeout: 60 * 1000}, async function () {
//   // Replace 'your-chat-messages-selector' with the selector for your chat message list
//   const chatMessagesBefore = await page.$eval('.ant-typography.css-1q11svj', el => el.outerHTML);

//   // Click the send button
//   await page.click('button.ant-btn.css-1q11svj.ant-btn-primary:contains("Send")');

//   // Waiting a little bit for any potential but unwanted change
//   await page.waitForTimeout(1000);

//   const chatMessagesAfter = await page.$eval('.ant-typography.css-1q11svj', el => el.outerHTML);

//   // Asserting that the message list hasn't changed
//   assert.strictEqual(chatMessagesBefore, chatMessagesAfter, 'The chat messages should not change after trying to send an empty message');
// });

