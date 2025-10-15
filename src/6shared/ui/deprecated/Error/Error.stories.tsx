import type { Meta, StoryObj } from '@storybook/react'
import { Error } from './Error'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/6shared/const/themes'

const meta = {
    title: 'shared/Error',
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

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}
