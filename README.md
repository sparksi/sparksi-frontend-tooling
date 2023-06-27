# Sparks Tooling

## What is this?

This is the the Sparks Interactive monorepo. A central hub for opens source packages and tools.

## Directory structure
- `src`: For now, where components sit.

Other options:
- `packages/ui`: frontend components
- `packages/npm`: npm packages
- `packages/composer`: composer php packages and drupal modules
- `apps`: applications that use the two above

## Setup locally

### Requirements

- Git
- pnpm
- Composer
- [direnv](https://direnv.net/docs/installation.html) (don't forget about the [hook installation](https://direnv.net/docs/hook.html)!)

### Setup

```sh
git clone git@github.com:sparksi/sparksi-frontend-tooling.git
cd sparksi-frontend-tooling
pnpm i
```

## Tests
Tests are in the packages/tests folder
run `pnpm exec playwright test`
