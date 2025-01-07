import type { Meta, StoryObj } from '@storybook/react'
import CommentForm from './CommentForm'
import { StoreDecorator } from '6shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '1app/providers/ThemeProvider'

const meta = {
  title: 'features/AddArticleCommentForm',
  component: CommentForm,
  tags: ['autodocs'],
  args: {
    onSend: () => {}
  },
  decorators: [StoreDecorator({})]

} satisfies Meta<typeof CommentForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
  }
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
