module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'sort-imports': 'off',
    'import/order': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'warn',
      {
        tabWidth: 2,
        printWidth: 120,
        trailingComma: 'es5',
        semi: true,
        singleQuote: true,
        endOfLine: 'auto',
        bracketSpacing: true,
        jsxBracketSameLine: true,
      },
    ],
  },
  plugins: ['simple-import-sort'],
};
