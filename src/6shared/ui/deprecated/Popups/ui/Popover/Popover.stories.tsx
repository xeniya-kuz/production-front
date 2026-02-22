import type { Meta, StoryObj } from '@storybook/react'
import { Popover } from './Popover'
import { Button } from '../../../Button'

const meta = {
    title: 'shared/deprecated/Popups/Popover',
    component: Popover,

    args: {
        trigger: <Button>trigger</Button>,
        children: <div>dflfknkjdfjkdfjkdfk</div>,
    },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
