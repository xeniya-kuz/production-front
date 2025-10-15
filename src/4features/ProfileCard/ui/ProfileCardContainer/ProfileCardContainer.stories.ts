import { profileMock } from '@/5entities/Profile'
import { userMock } from '@/5entities/User'
import { NewDesignDecorator } from '@/6shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'
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

export const PrimaryDeprecated: Story = {}

export const PrimaryRedesigned: Story = {
    decorators: [NewDesignDecorator],
}

export const Readonly: Story = {
    args: { readonly: true },
}

export const ReadonlyRedesigned: Story = {
    args: { readonly: true },
    decorators: [NewDesignDecorator],
}
