import type { Meta, StoryObj } from '@storybook/react'
import { NotificationButton } from './NotificationButton'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'features/NotificationButton',
    component: NotificationButton,
    tags: ['autodocs'],
    args: {},
    decorators: [(Story) => <Story />, StoreDecorator({})],
} satisfies Meta<typeof NotificationButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
