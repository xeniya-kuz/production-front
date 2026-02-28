import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { profileMock } from '@/entities/Profile'

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,

    decorators: [
        StoreDecorator({
            profile: {
                profile: { ...profileMock },
                editedProfile: { ...profileMock },
                readonly: true,
            },
        }),
    ],
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
