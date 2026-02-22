import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta = {
    title: 'shared/redesigned/Avatar',
    component: Avatar,
    args: {
        alt: 'Avatar',
        size: 80,
    },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const WithUsername: Story = {
    args: { username: 'John Doe' },
}

export const Small: Story = {
    args: { size: 40 },
}

export const Large: Story = {
    args: { size: 120 },
}
