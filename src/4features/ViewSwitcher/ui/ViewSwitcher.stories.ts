import type { Meta, StoryObj } from '@storybook/react'
import { ViewSwitcher } from './ViewSwitcher'
import { ArticleView } from '@/5entities/Article'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'features/ViewSwitcher',
    component: ViewSwitcher,

    args: {
        fetchData: () => {},
    },
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ViewSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Tile: Story = {
    args: { view: ArticleView.TILE },
}

export const List: Story = {
    args: { view: ArticleView.LIST },
}
