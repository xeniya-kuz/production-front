import type { Meta, StoryObj } from '@storybook/react'
import { Drawer } from './Drawer'

const meta = {
    title: 'shared/redesigned/Drawer',
    component: Drawer,

    args: {
        children: <p>text text text</p>,
        isOpen: true,
        onClose: () => {},
    },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
