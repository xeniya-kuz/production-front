import type { Meta, StoryObj } from '@storybook/react'
import { ArticleList } from './ArticleList'
import { articleMock } from '6shared/const/mocks/article'
import { ArticleView } from '5entities/Article/model/types/article'
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '1app/providers/ThemeProvider'

const meta = {
  title: 'entities/Article/ArticleList',
  component: ArticleList,

  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  args: {
    articles: new Array(3).fill(0)
      .map((_, index) => ({ ...articleMock, id: String(index) }))
  }

} satisfies Meta<typeof ArticleList>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryList: Story = {
  args: {
    view: ArticleView.LIST
  }
}

export const DarkList: Story = {
  args: {
    view: ArticleView.LIST
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const PrimaryTile: Story = {
  args: {
    view: ArticleView.TILE
  }
}

export const DarkTile: Story = {
  args: {
    view: ArticleView.TILE
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const PrimaryListLoading: Story = {
  args: {
    isLoading: true,
    view: ArticleView.LIST
  }
}

export const DarkListLoading: Story = {
  args: {
    isLoading: true,
    view: ArticleView.LIST
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const PrimaryTileLoading: Story = {
  args: {
    isLoading: true,
    view: ArticleView.TILE
  }
}

export const DarkTileLoading: Story = {
  args: {
    isLoading: true,
    view: ArticleView.TILE
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
