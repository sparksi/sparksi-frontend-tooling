module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: latest, // Put whatever version you want here
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  }
}
