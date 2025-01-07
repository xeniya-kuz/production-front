import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { profileMock } from '6shared/const/mocks/profile'
import AvatarImg from '6shared/assets/tests/storybook.jpg'
import { StoreDecorator } from '6shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'fullscreen'
  },

  tags: ['autodocs'],
  decorators: [StoreDecorator({
    profile: {
      editedProfile: {
        ...profileMock,
        avatar: AvatarImg
      },
      profile: {
        ...profileMock,
        avatar: AvatarImg
      }
    }
  })]
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Readonly: Story = {
  decorators: [StoreDecorator({
    profile: {
      readonly: true
    }
  })]
}

export const Error: Story = {
  decorators: [StoreDecorator({
    profile: {
      error: 'error'
    }
  })]
}

export const Loading: Story = {
  decorators: [StoreDecorator({
    profile: {
      isLoading: true
    }
  })]
}
