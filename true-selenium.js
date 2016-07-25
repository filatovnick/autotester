'use strict';

var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  Key = webdriver.Key,
  // test = require('selenium-webdriver/testing'),
  until = webdriver.until,
  proxy = require('selenium-webdriver/proxy');

// var assert = require('assert');

let chrome = require('selenium-webdriver/chrome');

let service = new chrome.ServiceBuilder('/Users/vitalets/projects/chromium/src/out/Default/chromedriver')
  .usingPort(9515)
  .loggingTo('./log.txt')
  .enableVerboseLogging()
  .build();

chrome.setDefaultService(service);

let options = new chrome.Options();
// options.addExtensions('../visbookmarks-chrome/out/yandex.crx');
// options.addArguments('--start-maximized');

const logging = webdriver.logging;
/*
const prefs = new logging.Preferences();
prefs.setLevel(logging.Type.BROWSER, logging.Level.ALL);
prefs.setLevel(logging.Type.CLIENT, logging.Level.ALL);
prefs.setLevel(logging.Type.DRIVER, logging.Level.ALL);
prefs.setLevel(logging.Type.PERFORMANCE, logging.Level.ALL);
prefs.setLevel(logging.Type.SERVER, logging.Level.ALL);
options.setLoggingPrefs(prefs);
*/

//logging.installConsoleHandler();
//logging.getLogger('webdriver').setLevel(logging.Level.FINER);


let driver = new webdriver.Builder()
  .forBrowser('chrome')
  // dont use capabilities here as they are overwritten by setChromeOptions
  .setChromeOptions(options)
  .build();


// quit driver in case of error
webdriver.promise.controlFlow().on('uncaughtException', function(e) {
  console.error(e);
  // driver.quit();
});


 driver.get('http://www.yandex.ru');
//driver.get('http://www.google.com/ncr');


//driver.executeScript(function () {
//  document.addEventListener('keydown', e => console.log('keydown', e.keyCode, e.keyIdentifier));
//});

//const el = driver.findElement(By.name('text'));
const el = driver.findElement({css: 'a[href="https://news.yandex.ru/?lang=ru"]'});
driver.actions()
  .keyDown(Key.COMMAND)
 // .keyDown(Key.SHIFT)
  .click(el)
  .keyUp(Key.SHIFT)
  .perform();
//
//driver.sleep(1000);
// driver.manage().window().maximize();
//driver.get('http://www.about.com/');
//driver.get('http://www.google.com/ncr');
// driver.findElement(By.name('text')).sendKeys('й');
//driver.findElement(By.name('q')).sendKeys(Key.SHIFT + '5');
//driver.findElement(By.name('q')).sendKeys('w');
//driver.actions()
 //.keyDown(Key.SHIFT)
 // .keyDown(Key.CONTROL)
  // .sendKeys(Key.SHIFT)
  // .sendKeys('Q')
  // .keyUp(Key.SHIFT)
 // .keyDown(Key.SHIFT)
 // .perform();



//driver.findElements(By.id('main')).then(res => console.log('elem found', res));
//driver.findElements({css: 'div1'}).then(res => console.log('elem found', res));

//driver.actions()
  // .keyDown(input.Key.SHIFT)
  //.click(el)
  //.perform();

driver.getAllWindowHandles().then(res => {
  console.log('switch to ', res[1]);
//  driver.switchTo().window(res[1]);
//
//  driver.actions()
//    .sendKeys('q')
//    .perform();
//
//  driver.findElement(By.name('text')).sendKeys('e');
//
//  driver.switchTo().window(res[0]);
//
//  driver.actions()
//    .sendKeys('w')
//    .perform();
});


//
//driver.sleep(1000);

// driver.getWindowHandle().then(res => console.log(res));
//driver.switchTo().frame(1);
//driver.findElement(By.id('main')).then(() => console.log('elem found'));
//driver.findElement(By.linkText('q')); //.catch(e => console.log('e', e));
//driver.findElement(By.name('btnG')).click();
//driver.wait(until.titleIs('webdriver - Google Search'), 2000);
//driver.wait(until.titleContains('Яндекс.Новости'), 2000);

//driver.quit().then(() => console.log('ok'));



