import { type Meta, type StoryObj } from '@storybook/react'
import ArticleRating from './ArticleRating'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'
import withMock from 'storybook-addon-mock'
import { articleRatingMock } from '@/6shared/const/mocks/rating'

const meta = {
  title: 'features/Article/ArticleRating',
  component: ArticleRating,
  tags: ['autodocs'],
  decorators: [StoreDecorator({}), withMock],
  args: { articleId: '1' },
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [articleRatingMock]
      }
    ]
  }

} satisfies Meta<typeof ArticleRating>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
}
