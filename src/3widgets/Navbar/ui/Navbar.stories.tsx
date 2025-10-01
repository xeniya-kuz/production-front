import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/6shared/const/themes'
import { Navbar } from './Navbar'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    decorators: [
        StoreDecorator({
            user: undefined,
        }),
    ],
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
}

export const Auth: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: { authData: { id: '123', username: 'username' } },
        }),
    ],
}
