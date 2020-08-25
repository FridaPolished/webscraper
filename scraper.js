const puppeteer = require('puppeteer');

async function scrapeWiki(url){
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  page.goto(url);

  const [el] = page.$x('//*[@id="mw-content-text"]/div[1]/ul[1]');

  

}

scrapeWiki('https://en.wikipedia.org/wiki/August_2')