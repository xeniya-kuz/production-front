import type { Meta, StoryObj } from '@storybook/react'
import { NotificationItem } from './NotificationItem'
import { notificationMock } from '6shared/const/mocks/notification'

const meta = {
  title: 'entities/NotificationItem',
  component: NotificationItem,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    notification: notificationMock
  },
  tags: ['autodocs']

} satisfies Meta<typeof NotificationItem>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
