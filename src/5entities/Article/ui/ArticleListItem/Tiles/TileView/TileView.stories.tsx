import type { Meta, StoryObj } from '@storybook/react'
import { TileView } from './TileView'
import { articleViews, handleButtonClick } from '../../../ArticleList/helpers'
import { articleMock } from '../../../../model/const/mocks'

const meta = {
    title: 'entities/Article/TileView',
    component: TileView,

    args: {
        article: articleMock,
        index: 0,
        articleViews,
        handleButtonClick,
    },
} satisfies Meta<typeof TileView>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
