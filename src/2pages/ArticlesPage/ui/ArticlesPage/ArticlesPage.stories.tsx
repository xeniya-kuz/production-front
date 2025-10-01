import type { Meta, StoryObj } from '@storybook/react'
import ArticlesPage from './ArticlesPage'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'pages/Article/ArticlesPage',
    component: ArticlesPage,
    tags: ['autodocs'],
    args: {},
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticlesPage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
