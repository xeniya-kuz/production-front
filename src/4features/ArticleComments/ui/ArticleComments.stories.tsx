import type { Meta, StoryObj } from '@storybook/react'
import ArticleComments from './ArticleComments'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'
import { commentsMock } from '@/5entities/Comment'

const meta = {
    title: 'features/Article/ArticleComments',
    component: ArticleComments,
    tags: ['autodocs'],
    args: {
        articleId: commentsMock[0].id,
    },
    decorators: [
        StoreDecorator({
            articleComments: {
                entities: {
                    [commentsMock[0].id]: commentsMock[0],
                },
                ids: [commentsMock[0].id],
            },
        }),
    ],
} satisfies Meta<typeof ArticleComments>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
