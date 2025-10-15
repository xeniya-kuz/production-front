import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'
import type { Meta, StoryObj } from '@storybook/react'
import ArticleDetailsPage from './ArticleDetailsPage'
import { articleMock } from '@/5entities/Article'

const meta = {
    title: 'pages/Article/ArticleDetailsPage',
    component: ArticleDetailsPage,

    args: {},
    decorators: [
        StoreDecorator({
            articleDetails: {
                article: articleMock,
            },
        }),
    ],
} satisfies Meta<typeof ArticleDetailsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Error: Story = {
    args: {},
}
