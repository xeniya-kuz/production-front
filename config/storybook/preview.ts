import { StyleDecorator } from '@/6shared/config/storybook/StyleDecorator/StyleDecorator'
import { type Preview } from '@storybook/react'
import { RouterDecorator } from '@/6shared/config/storybook/RouterDecorator/RouterDecorator'
import { Theme } from '@/6shared/const/themes'
import { withThemeByClassName } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: 'fullscreen',
    tags: ['autodocs']
  },
  decorators: [StyleDecorator, RouterDecorator,
    withThemeByClassName({
      themes: {
        light: Theme.LIGHT,
        dark: Theme.DARK,
        orange: Theme.ORANGE
      },
      defaultTheme: 'light'
    })
  ]
}

export default preview
