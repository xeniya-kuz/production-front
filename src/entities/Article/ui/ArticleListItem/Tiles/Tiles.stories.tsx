import type { Meta, StoryObj } from '@storybook/react'
import { Tiles } from './Tiles'
import {
    articleViews,
    articleTypes,
    articleImage,
    handleButtonClick,
} from '../../ArticleList/helpers'
import { articlesMock } from '../../../model/const/mocks'

const meta = {
    title: 'entities/Article/Tiles',
    component: Tiles,

    args: {
        articles: articlesMock,
        selectedArticleId: 0,
        handleButtonClick,
        articleViews,
        articleTypes,
        articleImage,
        virtualized: false,
    },
} satisfies Meta<typeof Tiles>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Loading: Story = {
    args: {
        isLoading: true,
    },
}
