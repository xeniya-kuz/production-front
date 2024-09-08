import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '1app/providers/ThemeProvider'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from '6shared/config/storybook/StoreDecorator/StoreDecorator'
import { profileMock } from '6shared/const/mocks/profile'
import AvatarImg from '6shared/assets/tests/storybook.jpg'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
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
