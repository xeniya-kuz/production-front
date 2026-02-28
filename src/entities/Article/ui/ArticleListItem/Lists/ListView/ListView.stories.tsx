import type { Meta, StoryObj } from '@storybook/react'
import { ListView } from './ListView'
import { articleViews, handleButtonClick } from '../../../ArticleList/helpers'
import { articleMock } from '../../../../model/const/mocks'

const meta = {
    title: 'entities/Article/ListView',
    component: ListView,

    args: {
        article: articleMock,
        index: 0,
        articleViews,
        handleButtonClick,
    },
} satisfies Meta<typeof ListView>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
