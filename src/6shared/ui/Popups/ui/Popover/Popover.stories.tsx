/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react'
import { Popover } from './Popover'
import { Button } from '../../../Button/Button'

const meta = {
    title: 'shared/Popups/Popover',
    component: Popover,
    tags: ['autodocs'],
    args: {
        trigger: <Button>trigger</Button>,
        children: <div>dflfknkjdfjkdfjkdfk</div>,
    },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}
