import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StyleDecorator } from '@/6shared/config/storybook/StyleDecorator/StyleDecorator'
import { type Preview } from '@storybook/react'
import { RouterDecorator } from '@/6shared/config/storybook/RouterDecorator/RouterDecorator'
import { Theme } from '@/6shared/const/themes'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: 'fullscreen',
    tags: ['autodocs']
  },
  decorators: [ThemeDecorator(Theme.LIGHT), StyleDecorator, RouterDecorator]
}

export default preview
