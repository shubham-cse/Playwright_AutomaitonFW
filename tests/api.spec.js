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
          "firstName": testdata.firstName,
          "lastName": testdata.lastName,
          "email": email,
          "password": testdata.password,
          "confirmpassword": testdata.confirmpassword
      }
    });
    expect(registerUserResponse.statusText()).toEqual("OK");
   // expect(registerUserResponse.status()).toEqual(404);
    console.log(registerUserResponse)
    console.log(await registerUserResponse.json())

    const loginPage = new login_page(page);
    await loginPage.goto();
    await loginPage.enter_username(testdata.email);
    await loginPage.enter_password(testdata.password);
    await loginPage.login_bttn();
    
    // await page.locator('.inventory_item').filter({ has: page.getByRole('link', { name: 'Sauce Labs Backpack' }) }).getByText('ADD TO CART').click();
    // await page.locator('.inventory_item').filter({ has: page.getByRole('link', { name: 'Sauce Labs Bike Light' }) }).getByText('ADD TO CART').click();
    // await page.locator('.inventory_item').filter({ has: page.getByRole('link', { name: 'Sauce Labs Bolt T-Shirt' }) }).getByText('ADD TO CART').click();
    // await page.locator('.inventory_item').filter({ has: page.getByRole('link', { name: 'Sauce Labs Backpack' }) }).getByText('ADD TO CART').click();
  });

});