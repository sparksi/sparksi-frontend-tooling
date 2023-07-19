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
        ],
      },
    ],
    'at-rule-no-vendor-prefix': true,
    'custom-property-empty-line-before': null,
    'declaration-block-single-line-max-declarations': 1,
    'selector-class-pattern': null,
    'scss/at-mixin-pattern': null,
    'scss/at-rule-no-unknown': null,
    'scss/dollar-variable-pattern': '[a-zA-Z]+(_[a-zA-Z]+)*',
    'no-invalid-position-at-import-rule': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-block-no-shorthand-property-overrides': null,
    'no-descending-specificity': null,
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme', 'list.append', 'svg-inline'],
      },
    ],
    'value-keyword-case': null,
  },
};
