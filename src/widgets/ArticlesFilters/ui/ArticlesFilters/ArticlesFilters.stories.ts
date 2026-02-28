import type { Meta, StoryObj } from '@storybook/react'
import { ArticlesFilters } from './ArticlesFilters'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'widgets/ArticlesFilters/redesigned',
    component: ArticlesFilters,
    decorators: [StoreDecorator({})],
    args: {
        fetchData: () => {},
    },
} satisfies Meta<typeof ArticlesFilters>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
