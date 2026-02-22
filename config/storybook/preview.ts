import { StyleDecorator } from '@/6shared/config/storybook/StyleDecorator/StyleDecorator'
import { type Preview } from '@storybook/react'
import { RouterDecorator } from '@/6shared/config/storybook/RouterDecorator/RouterDecorator'
import { Theme } from '@/6shared/const/themes'
import { withThemeByClassName } from '@storybook/addon-themes'
import { CenterDecorator } from '@/6shared/config/storybook/CenterDecorator/CenterDecorator'

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
