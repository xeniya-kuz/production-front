import type { Meta, StoryObj } from '@storybook/react'
import { StarRating } from './StarRating'

const meta = {
    title: 'shared/redesigned/StarRating',
    component: StarRating,
    args: {
        onSelect: () => {},
    },
} satisfies Meta<typeof StarRating>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Selected: Story = {
    args: { selectedStars: 3 },
}
