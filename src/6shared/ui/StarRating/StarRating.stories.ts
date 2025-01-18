import type { Meta, StoryObj } from '@storybook/react'
import { StarRating } from './StarRating'

const meta = {
  title: 'shared/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  args: {
    onSelect: () => {}
  }

} satisfies Meta<typeof StarRating>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
