import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    decorators: [
        StoreDecorator({
            user: { authData: {} },
        }),
    ],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const NoAuth: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: {},
        }),
    ],
}
