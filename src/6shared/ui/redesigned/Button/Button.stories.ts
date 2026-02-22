import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
    title: 'shared/redesigned/Button',
    component: Button,
    args: {
        children: 'Button',
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Outline: Story = {
    args: { variant: 'outline' },
}

export const Clear: Story = {
    args: { variant: 'clear' },
}

export const Small: Story = {
    args: { size: 's' },
}

export const Large: Story = {
    args: { size: 'l' },
}

export const Square: Story = {
    args: { square: true, children: '>' },
}

export const Disabled: Story = {
    args: { disabled: true },
}

export const FullWidth: Story = {
    args: { fullWidth: true },
}
