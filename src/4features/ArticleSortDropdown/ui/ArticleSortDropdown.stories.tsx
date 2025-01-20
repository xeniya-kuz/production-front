import type { Meta, StoryObj } from '@storybook/react'
import { ArticleSortDropdown } from './ArticleSortDropdown'
import { ArticleSortField } from '@/5entities/Article'

const meta = {
  title: 'features/Article/ArticleSortDropdown',
  component: ArticleSortDropdown,
  tags: ['autodocs'],
  args: {
    sort: ArticleSortField.TITLE,
    order: 'asc'
  }

} satisfies Meta<typeof ArticleSortDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {

}
