import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta = {
    title: 'shared/redesigned/Card',
    component: Card,
    args: {
        children: 'Card content',
    },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Outline: Story = {
    args: { variant: 'outline' },
}

export const Clear: Story = {
    args: { variant: 'clear' },
}

export const NoPadding: Story = {
    args: { padding: '0' },
}

export const Padding24: Story = {
    args: { padding: '24' },
}

export const RoundRadius: Story = {
    args: { radius: 'round' },
}
