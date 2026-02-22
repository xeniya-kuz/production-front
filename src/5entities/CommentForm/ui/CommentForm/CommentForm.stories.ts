import type { Meta, StoryObj } from '@storybook/react'
import CommentForm from './CommentForm'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'entities/Comment/CommentForm',
    component: CommentForm,

    args: {
        onSend: () => {},
    },
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof CommentForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
