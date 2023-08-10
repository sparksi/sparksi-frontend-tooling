'use strict';

module.exports = {
  extends: 'stylelint-config-standard-scss',
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'mixin',
          'mixin-content',
          'define-mixin',
          'extend',
          'extends',
          'ignores',
          'include',
          'media',
          'if',
          'else',
          'for',
          'each',
          'use',
          'svg-load',
          'tailwind',
          'screen',
          'apply',
        ],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme', 'list.append', 'svg-inline', 'svg-load'],
      },
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'font-face', 'screen', 'apply'],
      },
    ],
    'at-rule-no-vendor-prefix': true,
    'custom-property-empty-line-before': null,
    'declaration-block-single-line-max-declarations': 1,
    'selector-class-pattern': null,
    'scss/at-mixin-pattern': null,
    'scss/operator-no-newline-after': null,
    'scss/dollar-variable-pattern': '[a-zA-Z]+(_[a-zA-Z]+)*',
    'no-invalid-position-at-import-rule': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-block-no-shorthand-property-overrides': null,
    'no-descending-specificity': null,
    'value-keyword-case': null,
  },
};
