import type { Meta, StoryObj } from '@storybook/react'
import { ArticleTextBlock } from './ArticleTextBlock'
import { ArticleBlockType } from '../../model/const/article'

const meta = {
    title: 'entities/Article/ArticleTextBlock',
    component: ArticleTextBlock,

    args: {
        block: {
            id: 'text',
            type: ArticleBlockType.TEXT,
            title: 'title',
            paragraphs: [
                'Прежде всего выбранный нами инновационный путь обеспечивает широкому кругу специалистов существующий финансовых и административных условий.',
                'Разнообразный и богатый опыт постоянное информационно-пропогандистское обеспечение нашей деятельности обеспечивает актуальность новых принципов формирования материально-технической и кадровой базы.',
            ],
        },
    },
} satisfies Meta<typeof ArticleTextBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
