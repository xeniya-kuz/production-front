import type { Meta, StoryObj } from '@storybook/react'
import { ArticleCodeBlock } from './ArticleCodeBlock'
import { ArticleBlockType } from '../../model/const/article'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/6shared/const/themes'

const meta = {
  title: 'entities/Article/ArticleCodeBlock',
  component: ArticleCodeBlock,
  tags: ['autodocs'],
  args: {
    block: {
      id: 'code',
      type: ArticleBlockType.CODE,
      code: 'import type { Meta, StoryObj } from \'@storybook/react\'\n' +
        'import { ArticleCodeBlock } from \'./ArticleCodeBlock\'\n' +
        'import { ArticleBlockType } from \'../../model/types/article\'\n' +
        '\n' +
        'const meta = {\n' +
        '  title: \'entities/ArticleCodeBlock\',\n' +
        '  component: ArticleCodeBlock,\n' +
        '  tags: [\'autodocs\'],\n' +
        '  args: {\n' +
        '    block: {\n' +
        '      id: \'code\',\n' +
        '      type: ArticleBlockType.CODE,\n' +
        '      code: \'\'\n' +
        '   }\n' +
        '  }\n' +
        '\n' +
        '} satisfies Meta<typeof ArticleCodeBlock>\n'
    }
  }

} satisfies Meta<typeof ArticleCodeBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
  }
}

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] }
