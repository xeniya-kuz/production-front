import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import AvatarImg from '@/shared/assets/tests/avatar.jpg'

const meta = {
    title: 'shared/deprecated/Avatar',
    component: Avatar,
    parameters: {},

    args: { alt: 'Avatar', src: AvatarImg },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const WithSize: Story = {
    args: {
        size: 150,
    },
}
