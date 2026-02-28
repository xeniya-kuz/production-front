import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'
import { type Preview } from '@storybook/react'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator'
import { Theme } from '@/shared/const/themes'
import { withThemeByClassName } from '@storybook/addon-themes'
import { CenterDecorator } from '@/shared/config/storybook/CenterDecorator/CenterDecorator'
import { I18nDecorator } from '@/shared/config/storybook/I18nDecorator/I18nDecorator'

const preview: Preview = {
    globalTypes: {
        design: {
            name: 'Design',
            description: 'Switch between old and new design system',
            defaultValue: 'redesigned',
            toolbar: {
                icon: 'paintbrush',
                items: [
                    {
                        value: 'redesigned',
                        title: 'New Design',
                    },
                    { value: 'deprecated', title: 'Old Design' },
                ],
                showName: true,
                dynamicTitle: true,
            },
        },
    },
    parameters: {
        actions: {},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'fullscreen',
    },
    decorators: [
        StyleDecorator,
        I18nDecorator,
        RouterDecorator,
        CenterDecorator,
        withThemeByClassName({
            themes: {
                light: Theme.LIGHT,
                dark: Theme.DARK,
                orange: Theme.ORANGE,
            },
            defaultTheme: 'light',
            parentSelector: 'html',
        }),
    ],
}

export default preview
