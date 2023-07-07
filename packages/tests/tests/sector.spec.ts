import { test, expect } from '@playwright/test';

const testUrl = 'https://sector10.ddev.site';

test.beforeEach(async ({ page }) => {
  await page.goto(mainTestURL);
});

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Content management made easy./);
});

test('has follow us block title', async ({ page }) => {
  await expect(page.getByText('follow us')).toBeVisible();
});

test('has block follow us', async ({ page }) => {
  const followBlock = page.locator('.block--sector-starter-followus');
  await followBlock.waitFor();
});

test('has addtoanysharebuttons block', async ({ page }) => {
  const addtoanyBlock = page.locator(
    '.block--sector-starter-addtoanysharebuttons',
  );
  await addtoanyBlock.waitFor();
});

test('has addtoanysharebuttons share button', async ({ page }) => {
  const addtoanyshareButton = page.locator('.addtoany_share');
  await addtoanyshareButton.waitFor();
});
