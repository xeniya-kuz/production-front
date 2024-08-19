import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Currency } from '5entities/Currency'

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'fullscreen'
  },

  tags: ['autodocs'],
  args: {
    profile: {
      first: 'Trevor',
      lastname: 'Smith',
      age: 20,
      username: 'tra-ta-ta',
      city: 'San Francisco',
      currency: Currency.EUR
    }
  }
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Readonly: Story = {
  args: {
    readonly: true
  }
}
