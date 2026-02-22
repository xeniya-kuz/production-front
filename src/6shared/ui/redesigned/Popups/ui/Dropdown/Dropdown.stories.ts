import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'

const meta = {
    title: 'shared/redesigned/Popups/Dropdown',
    component: Dropdown,
    args: {
        trigger: 'Open',
        items: [
            { content: 'Item 1', onClick: () => {} },
            { content: 'Item 2', onClick: () => {} },
            { content: 'Item 3 (disabled)', onClick: () => {}, disabled: true },
        ],
    },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const TopLeft: Story = {
    args: { direction: 'top left' },
}

export const TopRight: Story = {
    args: { direction: 'top right' },
}

export const BottomLeft: Story = {
    args: { direction: 'bottom left' },
}
