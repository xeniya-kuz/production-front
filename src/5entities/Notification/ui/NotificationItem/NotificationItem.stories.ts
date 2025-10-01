import type { Meta, StoryObj } from '@storybook/react'
import { NotificationItem } from './NotificationItem'
import { notificationMock } from '../../model/const/mocks'

const meta = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        notification: notificationMock,
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NotificationItem>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
