import { test, expect } from '@playwright/test';

const testUrl = 'https://sector10beta.sector.nz';

test.beforeEach(async ({ page }) => {
  await page.goto(testUrl);
});

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(
    /Design and build captivating digital experiences even faster./,
  );
});

test('has block social block in footer', async ({ page }) => {
  const followBlock = page.locator('.footer-post .block--menu-social--follow');
  await followBlock.waitFor();
});

// //addtoanysharebuttons
// test('has addtoanysharebuttons block', async ({ page }) => {
//   const addtoanyBlock = page.locator(
//     '.block--sector-starter-addtoanysharebuttons',
//   );
//   await addtoanyBlock.waitFor();
// });

// test('has addtoanysharebuttons share button', async ({ page }) => {
//   const addtoanyshareButton = page.locator('.addtoany_share');
//   await addtoanyshareButton.waitFor();
// });
