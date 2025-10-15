import type { Meta, StoryObj } from '@storybook/react'
import { SkeletonListViewDeprecated } from './SkeletonListViewDeprecated'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/6shared/const/themes'

const meta = {
    title: 'entities/Article/SkeletonListView',
    component: SkeletonListViewDeprecated,

    parameters: {},
} satisfies Meta<typeof SkeletonListViewDeprecated>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
}
