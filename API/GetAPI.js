const { chromium } = require('playwright');
 
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
 
  // Perform GET request
  const response = await page.request.get('http://34.45.142.80:8180/api/catalogue-rest/product/search?productName=iphone');
 
  // Log response status
  console.log(`Response status: ${response.status()}`);
 
  // Log response body
  const responseBody = await response.json();
  console.log(responseBody);
 
  await browser.close();
})();