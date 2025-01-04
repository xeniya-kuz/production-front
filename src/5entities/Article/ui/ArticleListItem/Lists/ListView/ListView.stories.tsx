import { Theme } from '1app/providers/ThemeProvider'
import { ArticleType } from '5entities/Article/model/types/article'
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { articleMock } from '6shared/const/mocks/article'
import { Text } from '6shared/ui/Text/Text'
import type { Meta, StoryObj } from '@storybook/react'
import { ListView } from './ListView'

const meta = {
  title: 'entities/Article/ListView',
  component: ListView,

  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  args: {
    article: articleMock,
    // types: <Text text={`${ArticleType.IT}, ${ArticleType.ECONOMICS}`} />,
    // views: <Text text={'1042'}/>,
    index: 0
  }

} satisfies Meta<typeof ListView>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const DarkList: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
