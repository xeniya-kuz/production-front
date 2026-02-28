import type { Meta, StoryObj } from '@storybook/react'
import { AvatarDropdown } from './AvatarDropdown'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { userMock } from '@/entities/User'

const meta = {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,

    decorators: [
        StoreDecorator({
            user: {
                authData: userMock,
            },
        }),
    ],
} satisfies Meta<typeof AvatarDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
