import type { Meta, StoryObj } from '@storybook/react'
import { Drawer } from './Drawer'

const meta = {
    title: 'shared/Drawer',
    component: Drawer,
    tags: ['autodocs'],
    args: {
        children: <p>text text text</p>,
        isOpen: true,
        onClose: () => {},
    },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}
