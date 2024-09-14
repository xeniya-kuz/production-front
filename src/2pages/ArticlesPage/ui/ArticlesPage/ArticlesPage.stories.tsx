import type { Meta, StoryObj } from '@storybook/react'
import ArticlesPage from './ArticlesPage'

const meta = {
  title: 'pages/Article/ArticlesPage',
  component: ArticlesPage,
  tags: ['autodocs'],
  args: { }

} satisfies Meta<typeof ArticlesPage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
  }
}
