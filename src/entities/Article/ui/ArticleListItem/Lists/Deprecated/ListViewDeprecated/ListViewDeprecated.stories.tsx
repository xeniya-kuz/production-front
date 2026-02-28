import { articleMock } from '../../../../../model/const/mocks'
import type { Meta, StoryObj } from '@storybook/react'
import { ListViewDeprecated } from './ListViewDeprecated'
import {
    articleImage,
    articleTypes,
    articleViews,
} from '../../../../ArticleList/helpers'

const meta = {
    title: 'entities/Article/deprecated/ListView',
    component: ListViewDeprecated,

    parameters: {},

    args: {
        article: articleMock,
        // types: <Text text={`${ArticleType.IT}, ${ArticleType.ECONOMICS}`} />,
        // views: <Text text={'1042'} />,
        index: 0,
        articleTypes,
        articleViews,
        handleButtonClick: (index) => () => {},
        articleImage,
    },
} satisfies Meta<typeof ListViewDeprecated>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
