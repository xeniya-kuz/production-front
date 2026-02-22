import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'widgets/Navbar',
    component: Navbar,

    decorators: [
        StoreDecorator({
            user: undefined,
        }),
    ],
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Auth: Story = {
    decorators: [
        StoreDecorator({
            user: { authData: { id: '123', username: 'username' } },
        }),
    ],
}
