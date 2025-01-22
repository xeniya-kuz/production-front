import type { Meta, StoryObj } from '@storybook/react'
import { Code } from './Code'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/6shared/const/themes'

const meta = {
  title: 'shared/Code',
  component: Code,
  parameters: {
    layout: 'fullscreen'
  },

  tags: ['autodocs'],
  args: {
    code: 'import type { Meta, StoryObj } from \'@storybook/react\'\n' +
          'import { Code } from \'./Code\'\n' +
          '\n' +
          'const meta = {\n' +
          'title: \'shared/Code\',\n' +
          '  component: Code,\n' +
          '  parameters: {\n' +
          '    layout: \'fullscreen\'\n' +
          '  },`\n'
  }
} satisfies Meta<typeof Code>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] }
