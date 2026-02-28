import type { Meta, StoryObj } from '@storybook/react'
import { ArticleImageBlock } from './ArticleImageBlock'
import { ArticleBlockType } from '../../model/const/article'
import Image from '@/shared/assets/tests/imageBlockMock.jpg'

const meta = {
    title: 'entities/Article/ArticleImageBlock',
    component: ArticleImageBlock,

    args: {
        block: {
            id: 'image',
            type: ArticleBlockType.IMAGE,
            title: 'title',
            src: Image,
        },
    },
} satisfies Meta<typeof ArticleImageBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
