import { type Meta, type StoryObj } from '@storybook/react'
import { ArticleRecommendations } from './ArticleRecommendations'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'
import withMock from 'storybook-addon-mock'
import { articlesMock } from '@/6shared/const/mocks/article'

const meta = {
  title: 'features/Article/ArticleRecommendations',
  component: ArticleRecommendations,
  tags: ['autodocs'],
  decorators: [StoreDecorator({}), withMock],
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: [articlesMock]
      }
    ]
  }

} satisfies Meta<typeof ArticleRecommendations>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
  }
}
