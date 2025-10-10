import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Text } from '../Text/Text'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/6shared/const/themes'
const meta = {
    title: 'shared/Card',
    component: Card,

    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
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

export const Primary: Story = {
    args: {},
}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}
