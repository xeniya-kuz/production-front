import type { Meta, StoryObj } from '@storybook/react'
import { ArticleInfiniteList } from './ArticleInfiniteList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { articleEntities, articleIds } from '@/entities/Article'

const meta = {
    title: 'features/Article/ArticleInfiniteList',
    component: ArticleInfiniteList,

    args: {
        Header: () => <div style={{ backgroundColor: 'yellow' }}>Header</div>,
    },
    decorators: [
        StoreDecorator({
            articleInfiniteList: {
                entities: articleEntities,
                ids: articleIds,
            },
        }),
    ],
} satisfies Meta<typeof ArticleInfiniteList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
