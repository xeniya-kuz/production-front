import { Theme } from '@/6shared/const/themes'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { articleMock } from '@/6shared/const/mocks/article'
import type { Meta, StoryObj } from '@storybook/react'
import { TileView } from './TileView'

const meta = {
  title: 'entities/Article/TileView',
  component: TileView,

  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  args: {
    article: articleMock,
    index: 0
    // types: <Text text={`${ArticleType.IT}, ${ArticleType.ECONOMICS}`} />,
    // views: <Text text={'1042'}/>
  }

} satisfies Meta<typeof TileView>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
