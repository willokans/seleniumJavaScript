var webdriver = require ('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

  var driver = new webdriver.Builder().forBrowser('chrome').build();

  driver.get('https://login.salesforce.com');

  driver.findElements(By.id("username")).then(function(){
    console.log("success "+ el)
  });
  driver.findElements(By.id("password"));
  driver.findElements(By.id("Login"));

  
  setTimeout(function () {driver.quit()}, 100)
