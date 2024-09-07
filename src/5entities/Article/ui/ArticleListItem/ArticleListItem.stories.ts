import type { Meta, StoryObj } from '@storybook/react'
import { ArticleListItem } from './ArticleListItem'
import { articleMock } from '6shared/const/mocks/article'
import { ArticleView } from '5entities/Article/model/types/article'
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '1app/providers/ThemeProvider'

const meta = {
  title: 'entities/Article/ArticleListItem',
  component: ArticleListItem,

  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  args: {
    article: articleMock
  }

} satisfies Meta<typeof ArticleListItem>

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
