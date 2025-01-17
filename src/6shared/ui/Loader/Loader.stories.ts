import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/1app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Loader } from './Loader'

const meta = {
  title: 'shared/Loader',
  component: Loader,
  tags: ['autodocs'],
  // потому что анимацию сложно заскринить одинаково два раза
  parameters: {
    loki: { skip: true }
  }

} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
  }
}

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
