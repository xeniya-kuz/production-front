import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta = {
    title: 'shared/deprecated/Skeleton',
    component: Skeleton,
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        width: '100%',
        height: 200,
    },
}

export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
}
