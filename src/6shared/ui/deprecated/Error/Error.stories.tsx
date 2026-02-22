import type { Meta, StoryObj } from '@storybook/react'
import { Error } from './Error'

const meta = {
    title: 'shared/deprecated/Error',
    component: Error,
    parameters: {},

    args: {
        title: 'error title',
        text: 'error text',
    },
} satisfies Meta<typeof Error>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
