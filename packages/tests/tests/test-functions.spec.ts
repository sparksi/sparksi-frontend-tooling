import { test, expect } from '@playwright/test';

const testThatReturnsAString = (itemString) => {
  if (typeof itemString === 'string') {
    return itemString;
  } else {
    return undefined;
  }
};

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.sector.nz/');
});

test.describe('Clear completed button', () => {
  test('should display an H1 with text', async ({ page }) => {
    await page.locator('h1.page-header').first();
    await expect(
      page.locator('h1.page-header', {
        hasText: 'Sector. Content management made easy.',
      }),
    ).toBeVisible();
  });
});
