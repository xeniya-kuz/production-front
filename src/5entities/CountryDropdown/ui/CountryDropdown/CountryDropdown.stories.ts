import type { Meta, StoryObj } from '@storybook/react'
import { CountryDropdown } from './CountryDropdown'
import { Country } from '../../model/const/country'

const meta = {
  title: 'features/CountryDropdown',
  component: CountryDropdown,
  parameters: {
    layout: 'fullscreen'
  },

  tags: ['autodocs']
} satisfies Meta<typeof CountryDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    value: Country.Armenia
  }
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}
