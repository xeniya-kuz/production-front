import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCardDeprecated } from './ProfileCardDeprecated'
import { profileMock } from '@/5entities/Profile'

const meta = {
    title: 'features/ProfileCard',
    component: ProfileCardDeprecated,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    args: {
        profile: profileMock,
        onNumberChange: () => {},
        onTextChange: () => {},
    },
} satisfies Meta<typeof ProfileCardDeprecated>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Readonly: Story = {
    args: { readonly: true },
}
