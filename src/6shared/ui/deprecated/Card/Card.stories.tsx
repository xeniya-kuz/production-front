import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Text } from '../Text'
const meta = {
    title: 'shared/deprecated/Card',
    component: Card,

    parameters: {},

    args: {
        children: (
            <Text
                title="title"
                text="text text text"
            />
        ),
    },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
