/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],

  parserPreset: {
    parserOpts: {
      // conventional commit header:
      // type(scope): [JIRA-123] subject
      //   - no space before colon
      //   - exactly ONE space after colon
      headerPattern: /^(\w+)\(([^)]+)\):\s(.+)$/,
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

    // Enforce JIRA ticket at start of subject
    'subject-pattern': [
      2,
      'always',
      '^\\[[A-Z][A-Z0-9]+-\\d+\\]'
    ],

    // ---- Header rules ----
    'header-max-length': [2, 'always', 72],

    // ---- Body rules ----
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [1, 'always', 100],

    // ---- Footer rules ----
    'footer-leading-blank': [1, 'always']
  }
};
