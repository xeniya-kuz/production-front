import { Theme } from '@/6shared/const/themes'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { articlesMock } from '../../model/const/mocks'
import type { Meta, StoryObj } from '@storybook/react'
import { ArticleView } from '../../model/const/article'
import { ArticleList } from './ArticleList'

const meta = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,

    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    args: {
        articles: articlesMock,
    },
} satisfies Meta<typeof ArticleList>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryList: Story = {
    args: { view: ArticleView.LIST },
}

export const DarkList: Story = {
    args: { view: ArticleView.LIST },
    decorators: [ThemeDecorator(Theme.DARK)],
}

export const PrimaryTile: Story = {
    args: { view: ArticleView.TILE },
}

export const DarkTile: Story = {
    args: { view: ArticleView.TILE },
    decorators: [ThemeDecorator(Theme.DARK)],
}

export const PrimaryListLoading: Story = {
    args: {
        isLoading: true,
        view: ArticleView.LIST,
    },
}

export const DarkListLoading: Story = {
    args: {
        isLoading: true,
        view: ArticleView.LIST,
    },
}

export const PrimaryTileLoading: Story = {
    args: {
        isLoading: true,
        view: ArticleView.TILE,
    },
}

export const DarkTileLoading: Story = {
    args: {
        isLoading: true,
        view: ArticleView.TILE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}
