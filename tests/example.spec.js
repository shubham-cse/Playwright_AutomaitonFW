import { test, expect } from '@playwright/test';
const { login_page } = require('../Swaglabs_pom/pageobject_login');
const testdata = require('../testdata/testdata.json')


testdata.forEach((testdata) => {

  test(`test for user`+testdata.username, async ({ page, request }) => {

    // const products = await request.get(`http://34.45.142.80:8180/api/catalogue-rest/product/15`);
    // console.log(await products.json())

    let email = Math.random().toString(36).substring(2, 12)+ "@nomail.com";
 
    const registerUserResponse = await request.post(`http://34.45.142.80:8180/api/customer-rest/customer/register`, {
        data: {
          "err": "",
          "firstName": "Shubham",
          "lastName": "Sharma",
          "email": email,
          "password": "qwerty",
          "confirmpassword": "qwerty"
      }
    });
    //expect(registerUserResponse.statusText()).toEqual("OK");
    expect(registerUserResponse.status()).toEqual(404);
    console.log(registerUserResponse)
    console.log(await registerUserResponse.json())
    // const loginPage = new login_page(page);
    // await loginPage.goto();
    // await loginPage.enter_username(testdata.username);
    // await loginPage.enter_password(testdata.password);
    // await loginPage.login_bttn();
    // await page.locator('.inventory_item').filter({ has: page.getByRole('link', { name: 'Sauce Labs Backpack' }) }).getByText('ADD TO CART').click();
    // await page.locator('.inventory_item').filter({ has: page.getByRole('link', { name: 'Sauce Labs Bike Light' }) }).getByText('ADD TO CART').click();
    // await page.locator('.inventory_item').filter({ has: page.getByRole('link', { name: 'Sauce Labs Bolt T-Shirt' }) }).getByText('ADD TO CART').click();
    // await page.locator('.inventory_item').filter({ has: page.getByRole('link', { name: 'Sauce Labs Backpack' }) }).getByText('ADD TO CART').click();
  });

});



// test('test1', async ({ page }) => {
//   const loginpage = new login_page(page);
//   await loginpage.goto();
//   await loginpage.enter_username("standard_user");
//   await loginpage.enter_password("secret_sauce");
//   await loginpage.login_bttn();
  
//   await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
//   await page.getByRole('link', { name: '1' }).click();
//   await page.getByRole('link', { name: 'CHECKOUT' }).click();
//   await page.locator('[data-test="firstName"]').click();
//   await page.locator('[data-test="firstName"]').fill('test1');
//   await page.locator('[data-test="lastName"]').click();
//   await page.locator('[data-test="lastName"]').fill('test2');
//   await page.locator('[data-test="postalCode"]').click();
//   await page.locator('[data-test="postalCode"]').fill('54321');
//   await page.getByRole('button', { name: 'CONTINUE' }).click();
//   await page.getByRole('link', { name: 'FINISH' }).click();
//   await page.getByRole('button', { name: 'Open Menu' }).click();
//   await page.getByRole('link', { name: 'Logout' }).click();
// });
// test('test', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/v1/');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="password"]').click();
//   await page.getByRole('button', { name: 'LOGIN' }).click();
//   await expect(page.locator('[data-test="error"]')).toBeVisible();
// });
 
 
// test('test2', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/v1/');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.getByRole('button', { name: 'LOGIN' }).click();
//    // Add a product to the cart
//    await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');
 
//    // Go to the cart page
//    await page.click('.shopping_cart_link');
 
//    // Remove the added product
//    await page.click('button[data-test="remove-sauce-labs-backpack"]');
 
//    // Validate that the product is not displayed in the cart
//    const isProductDisplayed = await page.isVisible('.cart_item');
//    console.assert(!isProductDisplayed, 'Product is still displayed in the cart');
 
//    // Validate that the cart icon no longer shows "1"
//    const cartBadge = await page.$('.shopping_cart_badge');
//    console.assert(cartBadge === null, 'Cart icon still shows 1');
// });
