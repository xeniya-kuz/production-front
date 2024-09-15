import type { Meta, StoryObj } from '@storybook/react'
import { ArticleRecommendations } from './ArticleRecommendations'
import { StoreDecorator } from '6shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'features/Article/ArticleRecommendations',
  component: ArticleRecommendations,
  tags: ['autodocs'],
  decorators: [StoreDecorator({})]

} satisfies Meta<typeof ArticleRecommendations>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
  }
}
