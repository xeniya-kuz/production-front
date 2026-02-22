import type { Meta, StoryObj } from '@storybook/react'
import { Popover } from './Popover'

const meta = {
    title: 'shared/redesigned/Popups/Popover',
    component: Popover,
    args: {
        trigger: 'Open',
        children: 'Popover content',
        onTriggerClick: () => {},
    },
} satisfies Meta<typeof Popover>

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
