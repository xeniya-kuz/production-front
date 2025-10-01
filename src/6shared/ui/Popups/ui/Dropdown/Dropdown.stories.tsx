import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'

const meta = {
    title: 'shared/Popups/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    args: {
        items: [
            { content: 'content2' },
            { content: 'content1', disabled: true },
            { content: 'content3' },
        ],
        trigger: 'trigger',
    },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}
