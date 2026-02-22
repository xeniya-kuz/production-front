import type { Meta, StoryObj } from '@storybook/react'
import { ArticleImageBlock } from './ArticleImageBlock'
import { ArticleBlockType } from '../../model/const/article'

const meta = {
    title: 'entities/Article/ArticleImageBlock',
    component: ArticleImageBlock,

    args: {
        block: {
            id: 'image',
            type: ArticleBlockType.IMAGE,
            title: 'title',
            src: 'https://i.pinimg.com/originals/20/5c/ee/205ceef08eb91f182983d0f611f4f2a3.jpg',
        },
    },
} satisfies Meta<typeof ArticleImageBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
