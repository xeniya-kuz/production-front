import type { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
    stories: [
        '../../src/**/*.mdx',
        '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-themes',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    // чтобы не выпадала ошибка о том, что реакт в компоненте не импортирован
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic',
                },
            },
        },
    }),
    // 👇 See the table below for the list of supported options
    docs: {
        autodocs: 'tag',
    },
}
export default config
