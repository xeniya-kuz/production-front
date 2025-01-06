import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '1app/providers/ThemeProvider'
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ListBox } from './ListBox'

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
  tags: ['autodocs'],
  args: {
    options: [
      { value: 'value1', label: 'content1' },
      { value: 'value2', label: 'content2' },
      { value: 'value3', label: 'content3' }
    ]
  }

} satisfies Meta<typeof ListBox>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
