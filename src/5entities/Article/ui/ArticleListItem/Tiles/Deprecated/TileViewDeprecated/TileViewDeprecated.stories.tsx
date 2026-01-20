import { Theme } from '@/6shared/const/themes'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import type { Meta, StoryObj } from '@storybook/react'
import { TileViewDeprecated } from './TileViewDeprecated'
import {
    articleImage,
    articleTypes,
    articleViews,
} from '../../../../ArticleList/helpers'
import { articleMock } from '../../../../../model/const/mocks'

const meta = {
    title: 'entities/Article/TileView',
    component: TileViewDeprecated,
    parameters: {},
    args: {
        article: articleMock,
        index: 0,
        articleTypes,
        articleViews,
        handleButtonClick: (index) => () => {},
        articleImage,
    },
} satisfies Meta<typeof TileViewDeprecated>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}
