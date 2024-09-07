import type { Meta, StoryObj } from '@storybook/react'
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton'
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '1app/providers/ThemeProvider'
import { ArticleView } from '5entities/Article/model/types/article'

const meta = {
  title: 'entities/Article/ArticleListItemSkeleton',
  component: ArticleListItemSkeleton,

  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ArticleListItemSkeleton>

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
