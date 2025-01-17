import { profileMock } from '@/6shared/const/mocks/profile'
import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'fullscreen'
  },

  tags: ['autodocs'],
  args: { profile: profileMock }
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Readonly: Story = {
  args: { readonly: true }
}

export const Error: Story = {
  args: { error: 'error' }
}

export const Loading: Story = {
  args: { isLoading: true }
}
