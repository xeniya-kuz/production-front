import type { Meta, StoryObj } from '@storybook/react'
import { ViewSwitcher } from './ViewSwitcher'
import { ArticleView } from '@/5entities/Article'

const meta = {
    title: 'features/ViewSwitcher',
    component: ViewSwitcher,
    tags: ['autodocs'],
    args: {
        onViewChange: () => {},
    },
} satisfies Meta<typeof ViewSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Tile: Story = {
    args: {
        view: ArticleView.TILE,
    },
}

export const List: Story = {
    args: {
        view: ArticleView.LIST,
    },
}
