import type { Meta, StoryObj } from '@storybook/react'
import AboutPage from './AboutPage'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,

    decorators: [StoreDecorator({})],
} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
