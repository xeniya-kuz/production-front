import type { Meta, StoryObj } from '@storybook/react'
import MainPage from './MainPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'pages/MainPage',
    component: MainPage,

    decorators: [StoreDecorator({})],
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
