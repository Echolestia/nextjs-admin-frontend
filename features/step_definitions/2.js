const { Given, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");

let browser, page;


//2
Given("admin goes to create article page",  {timeout: 60 * 1000}, async () => {
  console.log('running 2')
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
  await page.goto("http://localhost:3000/articles/new", { waitUntil: 'networkidle0', timeout: 60000 });
});

Then("the admin should see a form to create articles", async () => {
  const articlesUrl = "http://localhost:3000/articles/new";

  // Navigate to the page and wait for it to load
  await page.goto(articlesUrl, { waitUntil: 'networkidle0', timeout: 10000 });

  //await page.waitForNavigation();
  expect(await page.url()).to.equal(articlesUrl);


});



