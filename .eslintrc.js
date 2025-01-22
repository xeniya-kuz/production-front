module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
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
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks', 'fsd-path-checker-sia355'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-indent': [2, 4],
    "react/jsx-indent-props": ["error", 4],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx', '.ts'] },
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    "@typescript-eslint/no-invalid-void-type": 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/consistent-type-imports': 'warn',
    // подсказывает, где текст не переведен
    'i18next/no-literal-string': [
      'warn',
      {
        markupOnly: true,
        ignoreAttribute: ['to', 'src', 'fallback', 'data-testid', 'reducerTitle', 'target', 'align', 'direction', 'gap', 'justify', 'role', 'as','alt', 'anchor', 'border'], 
      },
    ],
    //сдедит за правильностью написания хуков и их зависимостей
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error', //checks effect dependencies
    'fsd-path-checker-sia355/path-checker': ['error', {alias: '@'}], //самодельный плагин
    'fsd-path-checker-sia355/public-api-imports': ['error', {//самодельный плагин
      alias: '@',
      testFilesPatterns: ['**/*.test.*', '**/*.stories.*', '**/StoreDecorator.tsx']
    }], 
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__:true,
  },
  // отключили правило i18next/no-literal-string для тестовых файлов
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}', '**/src/**/*.stories.{ts,tsx}'],
      rules: { 
        'i18next/no-literal-string': 'off'  
      },
    },
  ],
};
