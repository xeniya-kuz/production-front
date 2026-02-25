import { articlesMock } from '../../model/const/mocks'
import type { Meta, StoryObj } from '@storybook/react'
import { ArticleView } from '../../model/const/article'
import { ArticleList } from './ArticleList'

const meta = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,

    parameters: {},

    args: {
        articles: articlesMock,
        virtualized: false,
    },
} satisfies Meta<typeof ArticleList>

export default meta
type Story = StoryObj<typeof meta>

export const List: Story = {
    args: { view: ArticleView.LIST },
}

export const Tile: Story = {
    args: { view: ArticleView.TILE },
}

export const ListLoading: Story = {
    args: {
        isLoading: true,
        view: ArticleView.LIST,
    },
}

export const TileLoading: Story = {
    args: {
        isLoading: true,
        view: ArticleView.TILE,
    },
}
