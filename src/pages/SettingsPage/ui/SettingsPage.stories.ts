import type { Meta, StoryObj } from '@storybook/react'
import SettingsPage from './SettingsPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'pages/SettingsPage',
    component: SettingsPage,
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof SettingsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
