import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'
import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetails } from './ArticleDetails'
import { articleMock } from '../../model/const/mocks'

const meta = {
    title: 'entities/Article/ArticleDetails',
    component: ArticleDetails,

    args: {
        articleId: '1',
    },
} satisfies Meta<typeof ArticleDetails>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    decorators: [
        StoreDecorator({
            articleDetails: {
                article: articleMock,
            },
        }),
    ],
}

export const Loading: Story = {
    decorators: [
        StoreDecorator({
            articleDetails: {
                isLoading: true,
            },
        }),
    ],
}

export const Error: Story = {
    decorators: [
        StoreDecorator({
            articleDetails: {
                error: 'Ошибка при загрузке статьи',
            },
        }),
    ],
}
