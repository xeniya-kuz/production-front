import type { Meta, StoryObj } from '@storybook/react'
import AddCommentForm from './AddCommentForm'
import { StoreDecorator } from '6shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  tags: ['autodocs'],
  args: {
    onSend: () => {}
  },
  decorators: [StoreDecorator({})]

} satisfies Meta<typeof AddCommentForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
  }
}
