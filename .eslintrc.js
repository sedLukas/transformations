module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'import'],
  rules: {
    eqeqeq: 'error',
    'comma-dangle': 'off',
    'prettier/prettier': 'error',
    'no-duplicate-imports': 0,
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    complexity: 'off',
  },
}
