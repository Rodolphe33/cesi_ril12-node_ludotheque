var express = require('express');
var puppeeter = require('puppeteer');


( async () => {
  var browser = await puppeeter.launch();
  var page = await browser.newPage();
  await page.goto('https://github.com/SamuelBagattin/morpio');

})();
