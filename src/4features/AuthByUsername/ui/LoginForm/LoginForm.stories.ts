import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '1app/providers/ThemeProvider'
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { LoginForm } from './LoginForm'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs']

} satisfies Meta<typeof LoginForm>

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
