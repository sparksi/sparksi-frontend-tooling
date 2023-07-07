# Sparks Tooling

## What is this?

This is the the Sparks Interactive tooling hub with opens source packages and tools.
Currently the tools / packages are mostly linters like Eslint, StyleLint and pre-commit hooks. I've added on Playwright for testing.

## Setup locally

### Requirements

- Git
- **Recommend using PNPM**

## Installation:

To Install PNPM: https://pnpm.io/installation#using-npm

```sh
  pnpm add -D @sparksi/sparksi-frontend-tooling
```

  OR if you'd prefer yarn or npm you can install it as follows, and then you'd need to change the package scripts accordingly.

```
  yarn add --save-dev @sparksi/sparksi-frontend-tooling

  or

  npm add -D @sparksi/sparksi-frontend-tooling

```

Then extend your configs, for example:

```json
// .stylelintrc.json file
{
  "extends": "@sparksi/sparksi-frontend-tooling/stylelint"
}
```

### Folder Structure
- `src/`: UI components (if we were to use storybook)
- `packages/`
  - `/eslint`: EsLint config for extending your coding workspace.
  - `/stylelint`: Stylelint config for extending your coding workspace.
  - `/prettier`: Prettier config for extending your coding workspace.
  - `/tests`: Playwright silent functional and e2e style tests
    - see more examples https://playwright.dev/docs/writing-tests

### Contribute

```sh
git clone git@github.com:sparksi/sparksi-frontend-tooling.git
cd sparksi-frontend-tooling
pnpm i
```
- Commit changes and open a pull request.


## Tests
Tests and examples are in the packages/tests folder
run `pnpm exec playwright test` (headless)
run `pnpm exec playwright testui` (in a chromium UI)

Read more about [Playwright](https://playwright.dev/)
