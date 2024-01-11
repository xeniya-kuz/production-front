module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    // подсвечивает ошибкой, если у текста нет перевода
    'plugin:i18next/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      //files: ['.eslintrc.{js,cjs}'],
      files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'i18next'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-indent': [2, 4],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx', '.ts'] },
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    // подсказывает, где текст не переведен
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['to', 'src', 'fallback'],
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
  },
};
