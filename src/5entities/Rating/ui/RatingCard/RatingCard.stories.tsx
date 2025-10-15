import type { Meta, StoryObj } from '@storybook/react'
import { RatingCard } from './RatingCard'

const meta = {
    title: 'entities/RatingCard',
    component: RatingCard,

    args: {
        title: 'title',
        feedbackTitle: 'cool cool cool',
        hasFeedback: true,
        onCancel: () => {},
        onAccept: () => {},
        fullWidth: true,
    },
} satisfies Meta<typeof RatingCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
