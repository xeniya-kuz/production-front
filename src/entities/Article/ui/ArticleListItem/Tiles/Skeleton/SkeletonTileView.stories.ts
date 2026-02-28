import type { Meta, StoryObj } from '@storybook/react'
import { SkeletonTileView } from './SkeletonTileView'

const meta = {
    title: 'entities/Article/SkeletonTileView',
    component: SkeletonTileView,
} satisfies Meta<typeof SkeletonTileView>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
