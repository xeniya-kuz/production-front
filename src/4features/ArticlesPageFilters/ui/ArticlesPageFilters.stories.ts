import type { Meta, StoryObj } from '@storybook/react'
import { ArticlesPageFilters } from './ArticlesPageFilters'

const meta = {
  title: 'features/ArticlesPageFilters',
  component: ArticlesPageFilters,
  tags: ['autodocs'],
  args: { }

} satisfies Meta<typeof ArticlesPageFilters>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
  }
}
