import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import AvatarImg from '@/6shared/assets/tests/storybook.jpg'

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'fullscreen'
  },

  tags: ['autodocs'],
  args: { alt: 'Avatar', src: AvatarImg }
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
}

export const WithSize: Story = {
  args: {
    size: 150
  }
}
