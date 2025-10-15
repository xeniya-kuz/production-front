import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './CommentCard'
import { FeaturesFlagsDecorator } from '@/6shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator'

const meta = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    parameters: {},

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

export const PrimaryRedesigned: Story = {
    decorators: [FeaturesFlagsDecorator({ isAppRedesigned: true })],
}

export const Loading: Story = {
    args: {
        isLoading: true,
    },
}
