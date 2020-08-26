const puppeteer = require('puppeteer');

//working solution
puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://en.wikipedia.org/wiki/August_2');
  const [el] = await page.$x('//*[@id="mw-content-text"]/div[1]/ul[1]');
    const src = await el.getProperty('textContent');
    const srcTxt = await src.jsonValue();
    console.log({srcTxt});
  await browser.close();
});


//works but needs to extract values from the page
// const url = 'https://en.wikipedia.org/wiki/August_2';
// puppeteer
// .launch()
// .then(function(browser){
//   return browser.newPage();
// })
// .then(function(page){
//   return page.goto(url).then(function(){
//     return page.content();
//   })
// })
// .then(function(html){
//   console.log(html)
// })
// .catch((err) => {
//   console.log(err);
// });

