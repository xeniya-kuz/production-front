import type { Meta, StoryObj } from '@storybook/react'
import { CommentList } from './CommentList'

const meta = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    parameters: {},

    args: {
        comments: [
            {
                id: '1',
                text: 'Comment 1',
                user: { id: '1', username: 'user1' },
            },
            {
                id: '2',
                text: 'Comment 2',
                user: { id: '2', username: 'user2' },
            },
            {
                id: '3',
                text: 'Comment 3',
                user: { id: '3', username: 'user3' },
            },
        ],
    },
} satisfies Meta<typeof CommentList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Loading: Story = {
    args: {
        isLoading: true,
    },
}
