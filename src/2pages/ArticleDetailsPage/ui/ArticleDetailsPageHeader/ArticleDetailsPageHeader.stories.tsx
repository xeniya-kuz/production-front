import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'
import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'
import { articleMock } from '@/5entities/Article'

const meta = {
  title: 'pages/Article/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  tags: ['autodocs'],
  args: {

  },
  decorators: [StoreDecorator({
    articleDetails:
    {
      article: articleMock
    }
  })]

} satisfies Meta<typeof ArticleDetailsPageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Error: Story = {
  args: {
  }
}
