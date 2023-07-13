// const { Given, When, Then } = require("@cucumber/cucumber");
// const { expect } = require("chai");
// const puppeteer = require("puppeteer");

// let browser;
// let page;

// Before(async () => {
//   browser = await puppeteer.launch();
//   page = await browser.newPage();
// });

// After(async () => {
//   await browser.close();
// });

// // #1 Scenario: Admin attempts to create an account
// Given('an admin is on the log in page', async () => {
//     await page.goto('https://admindashboard-xnabw36hha-as.a.run.app/login'); // replace with your login page url
//   });

// When('the admin clicks on the \'register now!\' button', async () => {
//     const signUpButtonSelector = '[data-testid="signup-button"]'; // replace with your button selector
//     await page.waitForSelector(signUpButtonSelector);
//     await page.click(signUpButtonSelector);
// });

// Then('the admin will be directed to a sign up page', async () => {
//     const expectedUrl = 'http://localhost:3000/signup'; // replace with your signup page url
//     const currentUrl = await page.url();
//     expect(currentUrl).to.equal(expectedUrl);
// });

// // #2 Scenario: Admin successfully signs up for a new account
// Given('an admin is on the sign up page', async () => {
//     await page.goto('http://localhost:3000/signup'); // replace with your signup page url
// });

// Given('fills in the necessary details for signing up', async () => {
//     // replace with your field selectors and input data
//     await page.type('[data-testid="email-field"]', 'testemail@gmail.com');
//     await page.type('[data-testid="password-field"]', 'TestPassword#123');
// });

// When('the admin clicks confirm', async () => {
//     const confirmButtonSelector = '[data-testid="confirm-button"]'; // replace with your button selector
//     await page.click(confirmButtonSelector);
// });

// Then('the admin will be directed to the home dashboard', async () => {
//     const expectedUrl = 'http://localhost:3000/dashboard'; // replace with your dashboard page url
//     const currentUrl = await page.url();
//     expect(currentUrl).to.equal(expectedUrl);
// });

// // #3 Scenario: Admin logs in with incorrect details
// Given('an admin is on the log in page', async () => {
//     await page.goto('http://localhost:3000/login'); // replace with your login page url
// });

// When('the admin fills in an incorrect password', async () => {
//     // replace with your field selectors and input data
//     await page.type('[data-testid="email-field"]', 'testemail@gmail.com');
//     await page.type('[data-testid="password-field"]', 'incorrectpassword');
//     await page.click('[data-testid="login-button"]');
// });

// Then('an error message will appear that either the email or password has been filled incorrectly', async () => {
//     const errorMessageSelector = '.error-message'; // replace with your error message selector
//     await page.waitForSelector(errorMessageSelector);
//     const errorMessage = await page.$(errorMessageSelector);
//     const errorMessageText = await errorMessage.evaluate(node => node.innerText);
//     expect(errorMessageText).to.equal('Either email or password is incorrect.') // replace with your error message
// });

// Then('the admin will still be on the log in page', async () => {
//     const currentUrl = await page.url();
//     expect(currentUrl).to.equal('http://localhost:3000/login'); // replace with your login page url
// });

// // #4 Scenario: Admin logs in with correct details
// Given('an admin is on the log in page', async () => {
//     await page.goto('http://localhost:3000/login'); // replace with your login page url
// });

// When('the admin fills in the correct email', async () => {
//     // replace with your field selector and input data
//     await page.type('[data-testid="email-field"]', 'correctemail@gmail.com');
// });

// When('fills in the correct password', async () => {
//     // replace with your field selector and input data
//     await page.type('[data-testid="password-field"]', 'correctpassword');
//     await page.click('[data-testid="login-button"]');
// });

// When('the admin clicks confirm', async () => {
//     const confirmButtonSelector = '[data-testid="confirm-button"]'; // replace with your button selector
//     await page.click(confirmButtonSelector);
// });

// Then('the admin will be redirected to the respective account\'s dashboard', async () => {
//     const expectedUrl = 'http://localhost:3000/dashboard'; // replace with your dashboard page url
//     const currentUrl = await page.url();
//     expect(currentUrl).to.equal(expectedUrl);
// });
