/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],

  parserPreset: {
    parserOpts: {
      // Allow optional space before colon: type(scope) : subject
      headerPattern: /^(\w+)\(([^)]+)\)\s?:\s(.+)$/,
      headerCorrespondence: ['type', 'scope', 'subject']
    }
  },

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
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', 'kebab-case'],

    // ---- Subject rules ----
    'subject-empty': [2, 'never'],

    // Require JIRA ticket at the start of the subject
    'subject-pattern': [
      2,
      'always',
      '^\\[[A-Z][A-Z0-9]+-\\d+\\]'
    ],

    'subject-pattern-error-message':
      'Subject must start with a JIRA ticket like [ABC-123]',

    // ---- Header rules ----
    'header-max-length': [2, 'always', 72],

    // ---- Body rules ----
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [1, 'always', 100],

    // ---- Footer rules ----
    'footer-leading-blank': [1, 'always']
  }
};
