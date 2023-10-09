module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.dev.json'],
    sourceType: 'module',
  },
  ignorePatterns: [
    '/lib/**/*', // Ignore built files.
    '.eslintrc.js'
  ],
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  rules: {
    'import/prefer-default-export': ['off'],
    // 'simple-import-sort/imports': 'error',
    // 'simple-import-sort/exports': 'error',
    'jsx-quotes': ['warn', 'prefer-double'],
    'sort-imports': [
      'error',
      {
        allowSeparatedGroups: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: true
      }
    ],
    'no-irregular-whitespace': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-console': 'off',
    'no-return-assign': ['error', 'except-parens'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    '@typescript-eslint/prefer-function-type': 'warn',
    // '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/keyword-spacing': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'interface', prefix: ['I'], format: ['PascalCase'] },
      { selector: 'property', format: ['camelCase'] },
      {
        selector: 'objectLiteralProperty',
        format: ['camelCase', 'snake_case']
      }
    ],
    // new
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
    'object-curly-newline': ['error', {
      multiline: true,
      minProperties: 2,
    }],
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/member-ordering': 'warn',
    '@typescript-eslint/no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': ['error', { props: false }],
    radix: ['error', 'as-needed'],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-base-to-string': 'off',
    // new react
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
    'react/jsx-newline': [
      'error'
      // { 'prevent': true, 'allowMultilines' : true }
    ],
    'react/jsx-one-expression-per-line': ['error', { allow: 'literal' }],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line'
      }
    ],
    'react/jsx-props-no-multi-spaces': 'error',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    indent: ['error', 2],
    'import/export': 'off',
    'import/no-cycle': ['error'],
    'import/extensions': 'off',
    // 'import-quotes/import-quotes': ['error', 'single'],
    'import/no-extraneous-dependencies': 'off'
  },
};
