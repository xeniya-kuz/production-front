import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'
import type { Meta, StoryObj } from '@storybook/react'
import ArticleEditPage from './ArticleEditPage'
import { articleMock } from '@/6shared/const/mocks/article'

const meta = {
  title: 'pages/Article/ArticleEditPage',
  component: ArticleEditPage,
  tags: ['autodocs'],
  args: {

  },
  decorators: [StoreDecorator({
    articleDetails:
    {
      article: articleMock
    }
  })]

} satisfies Meta<typeof ArticleEditPage>

export default meta
type Story = StoryObj<typeof meta>

export const Error: Story = {
  args: {
  }
}
