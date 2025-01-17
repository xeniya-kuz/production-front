import type { Meta, StoryObj } from '@storybook/react'
import { ArticlesPageFilters } from './ArticlesPageFilters'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'features/Article/ArticlesPageFilters',
  component: ArticlesPageFilters,
  tags: ['autodocs'],
  args: { },
  decorators: [StoreDecorator({})]

} satisfies Meta<typeof ArticlesPageFilters>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
  }
}
