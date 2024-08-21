import { test, expect } from '@playwright/test';
const { login_page } = require('../Swaglabs_pom/pageobject_login');

test('Select a product, add to cart, remove from cart, and verify @scenario3', async ({ page }) => {
    // Navigate to the URL
    await page.goto('https://www.saucedemo.com/v1');
      
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
      
    const productName = 'Sauce Labs Backpack';
    await page.click(`text=${productName}`);
      
    await page.click('button:has-text("Add to cart")');
      
    await page.click('.shopping_cart_link');
    await expect(page.locator(`.cart_item:has-text("${productName}")`)).toBeVisible();
   
    await page.click('button:has-text("Remove")');
   
    await expect(page.locator(`.cart_item:has-text("${productName}")`)).not.toBeVisible();
   
    await expect(page.locator('.shopping_cart_badge')).not.toBeVisible();
  });
   
   
   
   
  test('Add 3 products to cart, remove one, and verify @scenario4', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1');
   
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
   
    const productNames = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'];
    for (const productName of productNames) {
      await page.click(`text=${productName}`);
      await page.click('button:has-text("Add to cart")');
      await page.goBack();
    }
   
    await page.click('.shopping_cart_link');
   
    const cartCount = await page.locator('.shopping_cart_badge').textContent();
    expect(cartCount).toBe('3');
   
    const itemToRemove = 'Sauce Labs Bike Light';
    await page.click(`text=${itemToRemove}`);
    await page.click('button:has-text("Remove")');
    await page.goBack();
    await page.click('.shopping_cart_link');
   
    const remainingItems = productNames.filter(product => product !== itemToRemove);
    for (const product of remainingItems) {
      await expect(page.locator(`.cart_item:has-text("${product}")`)).toBeVisible();
    }
    await expect(page.locator(`.cart_item:has-text("${itemToRemove}")`)).not.toBeVisible();
   
    const updatedCartCount = await page.locator('.shopping_cart_badge').textContent();
    expect(updatedCartCount).toBe('2');
  });