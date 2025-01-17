import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'
import type { Meta, StoryObj } from '@storybook/react'
import ArticleDetailsPage from './ArticleDetailsPage'
import { articleMock } from '@/6shared/const/mocks/article'

const meta = {
  title: 'pages/Article/ArticleDetailsPage',
  component: ArticleDetailsPage,
  tags: ['autodocs'],
  args: {

  },
  decorators: [StoreDecorator({
    articleDetails:
    {
      article: articleMock
    }
  })]

} satisfies Meta<typeof ArticleDetailsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Error: Story = {
  args: {
  }
}
