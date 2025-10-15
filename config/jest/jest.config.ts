/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

// @ts-expect-error - не смогла понять, что не так
import { type Config } from 'jest'
import path from 'path'

const config: Config = {
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,

    // The test environment that will be used for testing
    testEnvironment: 'jsdom',

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],

    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: ['node_modules'],

    // чтобы тесты распознавали абсолютные пути
    modulePaths: ['<rootDir>src', '<rootDir>@'],

    // for '@testing-library/jest-dom
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],

    // An array of file extensions your modules use
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],

    // The root directory that Jest should scan for tests and modules within
    rootDir: '../../',

    // The glob patterns Jest uses to detect test files
    testMatch: [
        // предположительно, эта регулярка на маке не работает, только на винде
        // '**/__tests__/**/*.[jt]s?(x)',
        // '**/?(*.)+(spec|test).[tj]s?(x)'
        // преположительно, эта регулярка работает и на маке и на винде
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],

    // A set of global variables that need to be available in all test environments
    globals: {
        __IS_DEV__: true,
        __API__: '',
        __PROJECT__: 'jest',
    },

    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: '<rootDir>/reports/unit',
                filename: 'report.html',
                openReport: true,
                inlineSource: true,
            },
        ],
    ],

    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    // для scss
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        // заглушка, чтобы jest не ругался на svg. Т.е. тестировать svg мы не будем, т.к. это просто иконки. Для svg будет возвращаться jestEmptyComponent
        '\\.svg$': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        '\\.png$': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        // т.к. добавила alias @, иначе тесты падают
        '^@/(.*)$': '<rootDir>/src/$1',
    },

    detectOpenHandles: true,
}

export default config
