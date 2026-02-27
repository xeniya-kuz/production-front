import type { Meta, StoryObj } from '@storybook/react'
import { Lists } from './Lists'
import {
    articleViews,
    articleTypes,
    articleImage,
    handleButtonClick,
} from '../../ArticleList/helpers'
import { articlesMock } from '../../../model/const/mocks'

const meta = {
    title: 'entities/Article/Lists',
    component: Lists,

    args: {
        articles: articlesMock,
        selectedArticleId: 0,
        handleButtonClick,
        articleViews,
        articleTypes,
        articleImage,
        virtualized: false,
    },
} satisfies Meta<typeof Lists>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Loading: Story = {
    args: {
        isLoading: true,
    },
}
