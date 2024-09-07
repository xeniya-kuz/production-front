import type { Meta, StoryObj } from '@storybook/react'
import { SkeletonListView } from './SkeletonListView'
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '1app/providers/ThemeProvider'

const meta = {
  title: 'entities/Article/SkeletonListView',
  component: SkeletonListView,

  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']

} satisfies Meta<typeof SkeletonListView>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
  }
}

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
