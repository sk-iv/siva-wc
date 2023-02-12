module.exports = {
  extends: ['@open-wc/eslint-config'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [0, { devDependencies: true }],
    semi: 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'spaced-comment': 0,
  },
}
