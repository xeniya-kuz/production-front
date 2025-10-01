import type { Meta, StoryObj } from '@storybook/react'
import { SkeletonTileView } from './SkeletonTileView'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/6shared/const/themes'

const meta = {
    title: 'entities/Article/SkeletonTileView',
    component: SkeletonTileView,

    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SkeletonTileView>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}
