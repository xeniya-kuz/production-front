import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './CommentCard'

const meta = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    args: {
        comment: {
            id: '1',
            text: 'Comment 1',
            user: { id: '1', username: 'user1' },
        },
    },
} satisfies Meta<typeof CommentCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Loading: Story = {
    args: {
        isLoading: true,
    },
}
