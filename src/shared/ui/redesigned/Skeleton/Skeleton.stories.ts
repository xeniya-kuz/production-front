import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta = {
    title: 'shared/redesigned/Skeleton',
    component: Skeleton,
    args: {
        width: '100%',
        height: 20,
    },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Circle: Story = {
    args: {
        width: 80,
        height: 80,
        border: '50%',
    },
}

export const Block: Story = {
    args: {
        width: '100%',
        height: 200,
    },
}
