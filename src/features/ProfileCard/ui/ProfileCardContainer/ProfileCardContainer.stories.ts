import { profileMock } from '@/entities/Profile'
import { userMock } from '@/entities/User'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCardContainer } from './ProfileCardContainer'

const meta = {
    title: 'features/ProfileCard',
    component: ProfileCardContainer,
    parameters: {},
    args: {
        profile: profileMock,
    },
    decorators: [
        StoreDecorator({
            user: { _mounted: true, authData: userMock },
            profile: {
                readonly: true,
                profile: profileMock,
            },
        }),
    ],
} satisfies Meta<typeof ProfileCardContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Readonly: Story = {
    args: { readonly: true },
}
