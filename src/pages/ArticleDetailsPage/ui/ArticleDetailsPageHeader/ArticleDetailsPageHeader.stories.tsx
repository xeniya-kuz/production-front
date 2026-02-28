import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'
import { articleMock } from '@/entities/Article'

const meta = {
    title: 'pages/Article/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,

    decorators: [
        StoreDecorator({
            articleDetails: {
                article: articleMock,
            },
        }),
    ],
} satisfies Meta<typeof ArticleDetailsPageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
