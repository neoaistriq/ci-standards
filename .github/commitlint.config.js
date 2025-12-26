/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    // ---- Type rules ----
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert'
      ]
    ],

    // ---- Scope rules ----
    'scope-case': [2, 'always', 'kebab-case'],
    'scope-empty': [1, 'never'],

    // ---- Subject rules ----
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case']],

    // ---- Header rules ----
    'header-max-length': [2, 'always', 72],

    // ---- Body rules ----
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [1, 'always', 100],

    // ---- Footer rules ----
    'footer-leading-blank': [1, 'always']
  }
};
