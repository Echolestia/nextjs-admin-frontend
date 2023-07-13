const { Given, When, Then, After } = require("@cucumber/cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");

let browser, page;

Given("the admin is in the 'Chat' page", {timeout: 60 * 1000}, async function () {
    browser = await puppeteer.launch({headless: false});
    page = await browser.newPage();
    await page.goto('https://admindashboard-xnabw36hha-as.a.run.app/chat'); // replace string with the actual URL of the chat page on your site
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

    // Check if the desired element(s) appeared after the click
    console.log('Seeing if pop up exist')
    await page.waitForSelector('.ant-card-head-title');
});

Then('the admin should see the chat history with the user and their profile', {timeout: 60 * 1000}, async function () {
  const expectedChatTitle = 'Chat';
  const expectedProfileTitle = 'User Profile';

  // Wait for the chat title element to be loaded on the page
  await page.waitForSelector('.ant-card-head-title');
  const chatTitle = await page.$eval('.ant-card-head-title', elem => elem.textContent.trim());
  if (chatTitle !== expectedUserTitle.trim()) {
      throw new Error(`Expected chat title "${expectedChatTitle}", but got "${chatTitle}" instead`);
  }

  // Wait for the profile title element to be loaded on the page
  await page.waitForSelector('.ant-typography css-1q11svj');
  const profileTitle = await page.$eval('.ant-card-head-title', elem => elem.textContent.trim());
  if (profileTitle !== expectedMessageTitle.trim()) {
      throw new Error(`Expected profile title "${expectedProfileTitle}", but got "${profileTitle}" instead`);
  }
});

After(async function() {
  await browser.close();
});
