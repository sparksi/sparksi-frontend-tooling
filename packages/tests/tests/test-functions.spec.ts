import { test, expect } from '@playwright/test';
// const { testThatReturnsAString } = require('./test.js');

const testThatReturnsAString = (itemString) => {
  if (typeof itemString === 'string') {
    return itemString;
  } else {
    return undefined;
  }
};

test.describe('return String', () => {
  test('testThatReturnsAString', async () => {
    // Expect a function to return a string.
    // await expect(page).toHaveTitle(/Playwright/);
    const aString = 'this is a string';
    const INT = 10;
    const notString = undefined;

    expect(testThatReturnsAString(aString)).toBe(typeof String);

    expect(testThatReturnsAString(INT)).toBe(typeof INT);

    expect(testThatReturnsAString(notString)).toBe(undefined);
  });
});
