import { test, expect } from '@playwright/test';
const { login_page } = require('../Swaglabs_pom/pageobject_login');
const testdata = require('../testdata/testdata.json')

test('Visual C', async ({ page }) => {
  await page.goto('http://34.45.142.80:3000/');
  await page.pause()
  await expect(page.locator(".footer")).toHaveScreenshot({ maxDiffPixels: 85 });
});