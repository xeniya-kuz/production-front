import type { Meta, StoryObj } from '@storybook/react'
import { NotificationList } from './NotificationList'
import { notificationMock } from '@/6shared/const/mocks/notification'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [notificationMock]
      }
    ]
  },
  decorators: [StoreDecorator({})],
  tags: ['autodocs']

} satisfies Meta<typeof NotificationList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
