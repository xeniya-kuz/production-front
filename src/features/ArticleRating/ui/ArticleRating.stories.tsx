import { type Meta, type StoryObj } from '@storybook/react'
import ArticleRating from './ArticleRating'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { articleRatingMock } from '@/entities/Rating'
import { userMock } from '@/entities/User'
import { articleMock } from '@/entities/Article'

const meta = {
    title: 'features/Article/ArticleRating',
    component: ArticleRating,

    decorators: [StoreDecorator({ user: { authData: userMock } })],
    args: { articleId: articleMock.id },
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=${userMock.id}&articleId=${articleMock.id}`,
                method: 'GET',
                status: 200,
                response: [articleRatingMock],
            },
        ],
    },
} satisfies Meta<typeof ArticleRating>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
