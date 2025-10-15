import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/6shared/const/themes'
import { PageError } from './PageError'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'widgets/PageError',
    component: PageError,
} satisfies Meta<typeof PageError>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
}
