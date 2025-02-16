import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/6shared/const/themes'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Skeleton } from './Skeleton'

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  args: {

  }

} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    width: '100%',
    height: 200
  }
}

export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100
  }
}

export const PrimaryDark: Story = {
  args: {
    width: '100%',
    height: 200
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const CircleDark: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
