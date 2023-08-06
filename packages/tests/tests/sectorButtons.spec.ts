import { test, expect } from '@playwright/test';

const testUrl =
  'https://sector10beta.sector.nz/get-started/styles-and-design-components';

test.beforeEach(async ({ page }) => {
  await page.goto(testUrl);
});

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Styles and design components/);
});

test('has callout Primary', async ({ page }) => {
  const calloutPrimary = page.locator('.callout:not([class*=callout--])');
  await calloutPrimary.waitFor();
});

test('has callouts notice', async ({ page }) => {
  const calloutNotice = page.locator('.callout.callout--notice');
  await calloutNotice.waitFor();
});

test('has callouts alert', async ({ page }) => {
  const calloutAlert = page.locator('.callout.callout--alert');
  await calloutAlert.waitFor();
});

test('has highlighted text', async ({ page }) => {
  const highlight = page.locator('.highlight');
  await highlight.waitFor();
});

test('has Notices Button Primary', async ({ page }) => {
  const btnNoticePrimary = page.locator('.notices .btn.btn--primary');
  await btnNoticePrimary.waitFor();
});

test('has Button Primary', async ({ page }) => {
  const btnPrimary = page.locator('.node__content .btn.btn--primary');
  await btnPrimary.waitFor();
});

test('has Button dark', async ({ page }) => {
  const btnDark = page.locator('.btn.btn--dark');
  await btnDark.waitFor();
});

test('has Button light', async ({ page }) => {
  const btnLight = page.locator('.btn.btn--light');
  await btnLight.waitFor();
});

test('has Link arrow dark', async ({ page }) => {
  const linkArrow = page.locator('.link--promo--dark--arrow');
  await linkArrow.waitFor();
});
