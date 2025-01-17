import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'
import { profileMock } from '@/6shared/const/mocks/profile'
import type { Meta, StoryObj } from '@storybook/react'
import { ValidateProfileError } from '../../model/const/validate'
import { EditableProfileCard } from './EditableProfileCard'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  tags: ['autodocs'],
  args: {
    profileId: '1'
  },
  decorators: [StoreDecorator({
    profile: {
      profile: { ...profileMock }
    }
  })]

} satisfies Meta<typeof EditableProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Error: Story = {
  decorators: [StoreDecorator({
    profile: {
      error: 'error'
    }
  })]
}

export const IsLoading: Story = {
  decorators: [StoreDecorator({
    profile: {
      isLoading: true
    }
  })]
}

export const Readonly: Story = {
  decorators: [StoreDecorator({
    profile: {
      readonly: true
    }
  })]
}

export const ValidateErrors: Story = {
  decorators: [StoreDecorator({
    profile: {
      validateErrors: [ValidateProfileError.COUNTRY]
    }
  })]
}
