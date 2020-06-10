let driver = new webdriver.Builder()
.forBrowser('firefox')
.usingServer('http://localhost:4444/wd/hub')
.build();