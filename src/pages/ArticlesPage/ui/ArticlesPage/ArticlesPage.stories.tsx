import type { Meta, StoryObj } from '@storybook/react'
import ArticlesPage from './ArticlesPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { articleEntities, articleIds } from '@/entities/Article'

const meta = {
    title: 'pages/Article/ArticlesPage',
    component: ArticlesPage,
    // говорит loki пропустить данную story при запуске скриншотных тестов
    // parameters: {
    //     loki: { skip: true },
    // },
    args: { virtualized: false },
    decorators: [
        StoreDecorator({
            articleInfiniteList: {
                _inited: true,
                entities: articleEntities,
                ids: articleIds,
            },
        }),
    ],
} satisfies Meta<typeof ArticlesPage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
