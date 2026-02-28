import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import type { Meta, StoryObj } from '@storybook/react'
import ArticleEditPage from './ArticleEditPage'
import { articleMock } from '@/entities/Article'

const meta = {
    title: 'pages/Article/ArticleEditPage',
    component: ArticleEditPage,

    decorators: [
        StoreDecorator({
            articleDetails: {
                article: articleMock,
            },
        }),
    ],
} satisfies Meta<typeof ArticleEditPage>

export default meta
type Story = StoryObj<typeof meta>

export const Error: Story = {}
