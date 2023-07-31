import { test, expect } from '@playwright/test';

const enableThisTest = false;

if (enableThisTest) {
  const testUrl = 'https://sector10.ddev.site';
  const logindeets = 'test';

  test('Login in to Sector', async ({ page }) => {
    await page.goto(`${testUrl}/user/login`);

    // Find login form
    await expect(page.locator('#user-login-form')).toBeVisible();

    await page.getByRole('textbox', { name: 'name' }).fill(logindeets);
    await page.getByRole('textbox', { name: 'pass' }).fill(logindeets);

    // Login
    await page.getByRole('button', { name: 'Log in' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*user\/1/);
  });
}
