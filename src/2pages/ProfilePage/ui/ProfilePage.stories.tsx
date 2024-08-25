import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '1app/providers/ThemeProvider'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from '6shared/config/storybook/StoreDecorator/StoreDecorator'
import { Currency } from '5entities/Currency'
import AvatarImg from '6shared/assets/tests/storybook.jpg'
import { Country } from '5entities/Country'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  decorators: [StoreDecorator({
    profile: {
      editedProfile: {
        first: 'Trevor',
        lastname: 'Smith',
        age: 20,
        username: 'tra-ta-ta',
        city: 'San Francisco',
        currency: Currency.EUR,
        avatar: AvatarImg,
        country: Country.Armenia
      },
      profile: {

        first: 'Trevor',
        lastname: 'Smith',
        age: 20,
        username: 'tra-ta-ta',
        city: 'San Francisco',
        currency: Currency.EUR,
        avatar: AvatarImg,
        country: Country.Armenia

      }
    }
  })]

} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: { }
}

export const Dark: Story = {
  args: { },
  decorators: [ThemeDecorator(Theme.DARK)]
}
