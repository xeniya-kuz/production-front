import { Theme } from '@/6shared/const/themes'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { articleMock } from '../../../../../model/const/mocks'
import type { Meta, StoryObj } from '@storybook/react'
import { TileViewDeprecated } from './TileViewDeprecated'
import {
    articleImage,
    articleTypes,
    articleViews,
} from '../../../../ArticleList/helpers'

const meta = {
    title: 'entities/Article/TileView',
    component: TileViewDeprecated,

    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    args: {
        article: articleMock,
        index: 0,
        handleButtonClick: (index) => () => {},
        // articleImage: articleImage({
        //     width: 200,
        //     height: 200,
        //     className: '',
        //     article: articleMock,
        // }),
        // articleTypes: articleTypes({className: '',
        //     article: articleMock,}),
        // articleViews: articleViews({className: '',
        //     article: articleMock})
    },
} satisfies Meta<typeof TileViewDeprecated>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}
