# Sparks Interactive Project Template and Tooling

## What is this?

This is the the Sparks Interactive Project template tooling hub with opensource packages and tools.
Currently the tools / packages are linters like Eslint, StyleLint, Prettier and pre-commit hooks, with recommended extensions for realtime linting as you save your work and push to version control.
We've added on Playwright for Frontend testing.

## Setup locally
When starting a new project, these files can be used as a base, in the root of your project folder. This works outside of and a precursor to any other theme/folder like in Drupal web/themes, where you might have other packages. See further instructions on how to use these settings, to extend your themes' settings.

### Requirements

- Git
- **Recommend using PNPM** Globally.

## Installation:

To Install PNPM Globally: https://pnpm.io/installation#using-npm
- `npm install -g pnpm`
Or
- `brew install pnpm`

```sh
git clone git@github.com:sparksi/project-template.git
cd project-template
pnpm i
```

### If you are adding this to an existing project
- Copy files to the root (or copy and paste parts that make sense)
- Run `pnpm i`
- Run `pnpm prepare` if the above command didn't do so already. This will install the "husky hook" with lint-staged command.

Then extend your configs, for example, from a drupal theme: web/themes/custom/yourtheme, in your `https://github.com/sparksi/sector-distribution/blob/10.0.x/themes/sector_starter/.stylelintrc.json`

```json
// .stylelintrc.json file
{
  "extends": "/absolute/path/to/project-template/packages/stylelint" // this might need to be "../../../../../../packages/stylelint/index.js" if working in Sector web profiles, themes sector_starter
}
```

### Folder Structure
- `packages/`
  - `ui/src`: UI components (if we were to use storybook)
  - `eslint`: EsLint config for extending your coding workspace - currently not used.
  - `stylelint`: Stylelint config for extending your coding workspace.
  - `prettier`: Prettier config for extending your coding workspace.
  - `tests`: Playwright silent functional and e2e style tests
    - see more examples https://playwright.dev/docs/writing-tests

### Contribute to this template.

* `git checkout -b feat/your-change`
* Make your changes.
* Update [Changelog](CHANGELOG.md).
* Commit changes and open a pull request.

## Tests
* Tests and examples are in the packages/tests folder

*TO FIRST START USING TESTS, RUN:*
- `pnpm dlx playwright install`

Then:

- run `pnpm exec playwright test` (headless)
- run `pnpm exec playwright testui` (in a chromium UI)

Read more about [Playwright](https://playwright.dev/)


### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, change the `indentation` to spaces, turn off the `number-leading-zero` rule, and add the `unit-whitelist` rule:

```json
{
  // theme .stylelintrc.json
  "extends": "../../../../packages/stylelint/index.js",
  "rules": {
    "at-rule-no-unknown": [ true, {
      "ignoreAtRules": [
        "extends",
        "ignores"
      ]
    }],
    "number-leading-zero": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```

### Plugins
Plugins are rules or sets of rules built by the community that support methodologies, toolsets, non-standard CSS features, or very specific use cases. See [documentation](https://stylelint.io/user-guide/configuration/#plugins) for more information.

- Disallow features that are unsupported by the browsers that you are targeting:
  - [`stylelint-no-unsupported-browser-features`](https://www.npmjs.com/package/stylelint-no-unsupported-browser-features)
- A collection of order related linting rules for stylelint:
  - [`stylelint-order`](https://www.npmjs.com/package/stylelint-order)
- [All stylelint plugins](https://www.npmjs.com/search?q=keywords:stylelint-plugin)

## IDE Extensions
* VSCODE
  ```
    Name: Stylelint
    Id: stylelint.vscode-stylelint
    Description: Official Stylelint extension for Visual Studio Code
    Version: 1.2.4
    Publisher: Stylelint
    VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint

    Name: Prettier - Code formatter
    Id: esbenp.prettier-vscode
    Description: Code formatter using prettier
    Version: 9.19.0
    Publisher: Prettier
    VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
  ```

** Read the Extension's help text to show you how to update your user settings. E.g. Setting which code languages you'd like Stylelint to work with and whether to auto format on save etc.

** Example - VSCode settings - with Sparks project-template cloned locally, setting Prettier to be defaultFormatter":

User Settings: `press CMD + P then > user` Open user settings JSON.

```json
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "[scss]": {
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
```

* PHPSTORM
    https://www.jetbrains.com/help/phpstorm/using-stylelint-code-quality-tool.html

* Other IDEs: https://stylelint.io/user-guide/integrations/editor

* General info: https://stylelint.io/

## To publish this as a package to NPM:

### @sparksi/sparksi-frontend-tooling Package
- see `https://www.freecodecamp.org/news/how-to-create-and-publish-your-first-npm-package/`
- Run:
* `npm login` - You'll need to authenticate.
* `npm pubish` - You'll need to authenticate again.

Updating [package](https://docs.npmjs.com/getting-started/publishing-npm-packages#how-to-update-a-package).


## [License](LICENSE)
