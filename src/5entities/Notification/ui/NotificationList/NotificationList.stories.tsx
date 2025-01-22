import type { Meta, StoryObj } from '@storybook/react'
import { NotificationList } from './NotificationList'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'
import { notificationMock } from '../../model/const/mocks'

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
