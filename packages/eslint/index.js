module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: latest,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    next: {
      rootDir: ['components/*/','global/*'], // your theme folder components / src
    },
  },
};
