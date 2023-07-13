const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");

let browser, page;

Given("the admin is in the 'Chat' page", {timeout: 60 * 1000}, async function () {
  console.log('running 8')
    browser = await puppeteer.launch({headless: false});
    page = await browser.newPage();
    await page.goto('http://localhost:3000/chat'); // replace string with the actual URL of the chat page on your site
  });

  When('the admin sees a list of active chats and click on one of the chat', {timeout: 60 * 1000}, async function () {
    // Wait for the chat list to appear on the page
    const chatroomSelector = '[data-testid="chatroom-1"]';
    await page.waitForSelector(chatroomSelector);
    console.log('Valid')

    // Click the first chat in the list
    await page.click(chatroomSelector);

    // Add a delay if the element takes time to appear
    await page.waitForTimeout(1000);
});

Then('the admin should see the chat history with the user and their profile', {timeout: 60 * 1000}, async function () {
  const expectedChatTitle = 'Chat';
  const expectedProfileTitle = 'User Profile';

  // Wait for the chat title element to be loaded on the page
  await page.waitForSelector('.ant-card-head-title');
  const chatTitle = await page.$eval('.ant-card-head-title', elem => elem.textContent.trim());
  if (chatTitle !== expectedChatTitle.trim()) {
      throw new Error(`Expected chat title "${expectedChatTitle}", but got "${chatTitle}" instead`);
  }
  console.log('found Chat title ')

  // Wait for the profile title element to be loaded on the page
  await page.waitForSelector('[data-testid="user-profile-title"]');
  const profileTitle = await page.$eval('[data-testid="user-profile-title"]', elem => elem.textContent.trim());
  if (profileTitle !== expectedProfileTitle.trim()) {
      throw new Error(`Expected profile title "${expectedProfileTitle}", but got "${profileTitle}" instead`);
  }
});

