const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");
const { Keyboard } = require('puppeteer');

let browser, page;


Given("admin is in the create article page", async () => {
  console.log('running 4')
  // You'll replace this with your actual "Create Articles" page URL
  const createArticlePageUrl = "https://admindashboard-xnabw36hha-as.a.run.app/articles/new";

  browser = await puppeteer.launch({headless:false});
  page = await browser.newPage();
  console.log('loading...')
  await page.goto(createArticlePageUrl, { waitUntil: 'networkidle0', timeout: 60000 });
  console.log('done...')
});

When('admin fill in all required fields', async function () {
  await page.type('#title', '‘Invisible’ in Malaysia: Why are people born here stateless and will the govt’s citizenship proposals fix or worsen the problem?'); // Fill in the "Article Title" input field
  await page.type('#url', 'https://www.malaymail.com/news/malaysia/2023/06/30/invisible-in-malaysia-why-are-people-born-here-stateless-and-will-the-govts-citizenship-proposals-fix-or-worsen-the-problem/76895'); // Fill in the "Article Content" input field
  await page.type('#author', 'Ida Lim'); // Select a category from the dropdown
  await page.type('#published_date', '2023-06-30' );


  await page.keyboard.press('Enter'); // Press the "Return" key

});


When('admin clicks submit', async () => {
  const submitSelector = '[data-testid="submit-article-button"]';
  await page.waitForSelector(submitSelector);
  await page.click(submitSelector);
});

Then("admin should be in the view articles page", async () => {
  const createArticlePageUrl = "https://admindashboard-xnabw36hha-as.a.run.app/articles/new";


  expect(await page.url()).to.equal(createArticlePageUrl);
});

