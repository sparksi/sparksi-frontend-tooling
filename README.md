# Sparks Tooling

## What is this?

This is the the Sparks Interactive monorepo. A central hub for opens source packages and tools.
Currently the tools are mostly linters like Eslint, StyleLint and pre-commit hooks.

## Directory structure
- `src`: For now, where components sit.

Other options: (TODO)
- `packages/ui`: frontend components
- `packages/npm`: npm packages
- `packages/composer`: composer php packages and drupal modules
- `apps`: applications that use the two above

## Setup locally

### Requirements

- Git
- pnpm
- Composer (TODO)
- [direnv](https://direnv.net/docs/installation.html) (don't forget about the [hook installation](https://direnv.net/docs/hook.html)!)

## Installation:

```sh
  pnpm add -D @sparksi/sparksi-frontend-tooling

  or

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
Commit changes and open a pull request.

## Tests
Tests are in the packages/tests folder
run `pnpm exec playwright test`
