import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,

    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
