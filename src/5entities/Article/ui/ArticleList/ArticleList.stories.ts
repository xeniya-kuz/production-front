import type { Meta, StoryObj } from '@storybook/react'
import { ArticleList } from './ArticleList'
import { articlesMock } from '6shared/const/mocks/article'
import { ArticleView } from '5entities/Article/model/types/article'
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '1app/providers/ThemeProvider'
import { StoreDecorator } from '6shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'entities/Article/ArticleList',
  component: ArticleList,

  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  args: {
    articles: articlesMock
  }

} satisfies Meta<typeof ArticleList>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryList: Story = {
  decorators: [StoreDecorator({
    articlesPageFilters: {
      view: ArticleView.LIST
    }
  })]
}

export const DarkList: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    articlesPageFilters: {
      view: ArticleView.LIST
    }
  })]
}

export const PrimaryTile: Story = {
  decorators: [StoreDecorator({
    articlesPageFilters: {
      view: ArticleView.TILE
    }
  })]
}

export const DarkTile: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    articlesPageFilters: {
      view: ArticleView.TILE
    }
  })]
}

export const PrimaryListLoading: Story = {
  args: {
    isLoading: true
  },
  decorators: [StoreDecorator({
    articlesPageFilters: {
      view: ArticleView.LIST
    }
  })]
}

export const DarkListLoading: Story = {
  args: {
    isLoading: true
  },
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    articlesPageFilters: {
      view: ArticleView.LIST
    }
  })]
}

export const PrimaryTileLoading: Story = {
  args: {
    isLoading: true
  },
  decorators: [StoreDecorator({
    articlesPageFilters: {
      view: ArticleView.TILE
    }
  })]
}

export const DarkTileLoading: Story = {
  args: {
    isLoading: true
  },
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    articlesPageFilters: {
      view: ArticleView.TILE
    }
  })]
}
