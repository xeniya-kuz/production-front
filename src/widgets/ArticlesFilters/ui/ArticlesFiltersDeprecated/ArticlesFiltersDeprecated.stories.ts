import type { Meta, StoryObj } from '@storybook/react'
import { ArticlesFiltersDeprecated } from './ArticlesFiltersDeprecated'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'widgets/ArticlesFilters/deprecated',
    component: ArticlesFiltersDeprecated,

    args: {
        fetchData: () => {},
    },
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticlesFiltersDeprecated>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
