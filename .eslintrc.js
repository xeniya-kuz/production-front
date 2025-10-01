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
        'prettier',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'fsd-path-checker-sia355',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        // indent: [2,4]
        // "react/jsx-indent": [2, 4],
        // "react/jsx-indent-props": ["error", 4],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx', '.ts'] },
        ],
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/consistent-type-imports': 'warn',
        // подсказывает, где текст не переведен
        'i18next/no-literal-string': [
            'warn',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'to',
                    'src',
                    'fallback',
                    'data-testid',
                    'reducerTitle',
                    'target',
                    'align',
                    'direction',
                    'gap',
                    'justify',
                    'role',
                    'as',
                    'alt',
                    'anchor',
                    'border',
                ],
            },
        ],
        //следит за правильностью написания хуков и их зависимостей
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error', //checks effect dependencies
        'fsd-path-checker-sia355/path-checker': ['error', { alias: '@' }], //самодельный плагин
        'fsd-path-checker-sia355/public-api-imports': [
            'error',
            {
                //самодельный плагин
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/*.stories.*',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'fsd-path-checker-sia355/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: [
                    '**/StoreProvider',
                    '**/testing',
                    '**/ErrorBoundary/**',
                    '@/1app/types/router',
                ],
                ignoreFiles: ['**/ThemeDecorator.tsx', '**/StoreDecorator.tsx'],
            },
        ],
        '@typescript-eslint/no-namespace': [
            'error',
            { allowDeclarations: true },
        ],
        'react/jsx-max-props-per-line': [
            2,
            {
                maximum: 1,
                when: 'multiline',
            },
        ],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },

    overrides: [
        //   {
        //     env: {
        //       node: true,
        //     },
        //     //files: ['.eslintrc.{js,cjs}'],
        //     files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
        //     parserOptions: {
        //       sourceType: 'script',
        //     },
        //   },
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            // отключили правило i18next/no-literal-string для тестовых файлов
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
}
