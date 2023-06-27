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


### Contribute

```sh
git clone git@github.com:sparksi/sparksi-frontend-tooling.git
cd sparksi-frontend-tooling
pnpm i
```
- Commit changes and open a pull request.


## Tests
Tests and examples are in the packages/tests folder
run `pnpm exec playwright test`

Remove packages/tests/tests-examples if they get in the way or slow things down.

Read more about [Playwright](https://playwright.dev/)
