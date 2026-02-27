import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'
import { userMock } from '@/5entities/User'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,

    decorators: [
        StoreDecorator({
            user: { authData: userMock },
        }),
    ],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const NoAuth: Story = {
    decorators: [
        StoreDecorator({
            user: {},
        }),
    ],
}
