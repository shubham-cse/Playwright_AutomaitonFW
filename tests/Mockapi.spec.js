import { test, expect } from '@playwright/test';
const { login_page } = require('../Swaglabs_pom/pageobject_login');
const testdata = require('../testdata/testdata.json')


test("mock api", async ({ page }) => {
  // Mock the api call before navigating
  await page.route('*/**/api/v1/fruits', async route => {
    const json = [{ name: 'Strawberry', id: 21 }];
    await route.fulfill({ json });
  });
  // Go to the page
  await page.goto('https://demo.playwright.dev/api-mocking');
  await page.pause();

  // Assert that the Strawberry fruit is visible
  await expect(page.getByText('Strawberry')).toBeVisible();

});
 
