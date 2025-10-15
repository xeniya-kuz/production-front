import type { Meta, StoryObj } from '@storybook/react'
import { SkeletonTileViewDeprecated } from './SkeletonTileViewDeprecated'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/6shared/const/themes'

const meta = {
    title: 'entities/Article/SkeletonTileView',
    component: SkeletonTileViewDeprecated,

    parameters: {},
} satisfies Meta<typeof SkeletonTileViewDeprecated>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}
