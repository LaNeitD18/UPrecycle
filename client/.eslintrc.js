module.exports = {
  root: true,
  extends: ['airbnb', 'plugin:react/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native', 'react-hooks'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': ['error', {extensions: ['.ts', '.tsx']}],
    'import/no-unresolved': 'off',
    'import/extensions': ['error', 'never'],
  },
};
