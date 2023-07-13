// const { Given, When, Then } = require('@cucumber/cucumber');
// const { expect } = require("chai");
// const puppeteer = require('puppeteer');
// const { Keyboard } = require('puppeteer');

// let browser, page;


// Given("the admin is in a chat", {timeout: 60 * 1000}, async function () {
//     // Confirm that the admin is actually in a chat page
//     // You can check for an element that only appears on the chat page
//     browser = await puppeteer.launch();
//     page = await browser.newPage();
//     await page.goto('https://admindashboard-xnabw36hha-as.a.run.app/chat');

//     await page.waitForSelector('replace with correct chat tab selector');
//     console.log('Valid')
//     // Retrieve all list items ('li' elements)
//     const chats = await page.$$('replace with correct chat tab selector');
//     if (chats.length === 0) {
//         throw new Error('No chats found.');
//     }

//     // Click the first chat in the list
//     await chats[0].click();

//     // Add a delay if the element takes time to appear
//     await page.waitForTimeout(1000);

//     // Check if the desired element(s) appeared after the click
//     // Replace '.desired-element' with the selector of the element you want to check
//     console.log('Seeing if pop up exist')
//     await page.waitForSelector('.ant-card-head-title');
// });

// When("the admin fills in the 'Type your message here' field and press enter", {timeout: 60 * 1000}, async function () {
//     const message = 'This is a test message';

//     // Fill the message into the input field
//     await page.waitForSelector('.ant-input.css-1q11svj'); // replaced with actual selector
//     await page.type('.ant-input.css-1q11svj', message); // replaced with actual selector
//     await page.keyboard.press('Enter');
// });

// Then("the admin should see the message appear in the chat", {timeout: 60 * 1000}, async function () {
//     const message = 'hello world';

//     // Check if the message appears in the chat
//     // Replaced 'your-chat-display-area-selector' with the actual selector of your chat display
//     await page.waitForSelector('.ant-typography.css-1q11svj');
//     const chatContent = await page.$eval('.ant-typography.css-1q11svj', e => e.textContent);

//     // Throwing an error if the message does not appear in the chat
//     if (!chatContent.includes(message)) {
//         throw new Error('Message not found in chat');
//     }
// });


// Given("the admin is in a chat again", {timeout: 60 * 1000}, async function () {
//     // Confirming the admin is in an active chat by waiting for a specific element in the chat
//     // Replace 'your-chat-specific-element-selector' with a selector that represents an active chat
//     await page.waitForSelector('your-chat-specific-element-selector');
// });

// When("the admin has not input anything into 'Type your message here' field", {timeout: 60 * 1000}, async function () {
//     const inputValue = await page.evaluate(() => document.querySelector('.ant-input.css-1q11svj').value);
//     if (inputValue !== '') {
//         throw new Error('Message input field is not empty');
//     }
// });


// Then("the admin should not be able to send a new message when clicked on 'send'", {timeout: 60 * 1000}, async function () {
//     // Replace 'your-chat-messages-selector' with the selector for your chat message list
//     const chatMessagesBefore = await page.$eval('.ant-typography.css-1q11svj', el => el.outerHTML);

//     // Click the send button
//     await page.click('button.ant-btn.css-1q11svj.ant-btn-primary:contains("Send")');

//     // Waiting a little bit for any potential but unwanted change
//     await page.waitForTimeout(1000);

//     const chatMessagesAfter = await page.$eval('.ant-typography.css-1q11svj', el => el.outerHTML);

//     // Asserting that the message list hasn't changed
//     assert.strictEqual(chatMessagesBefore, chatMessagesAfter, 'The chat messages should not change after trying to send an empty message');
// });
