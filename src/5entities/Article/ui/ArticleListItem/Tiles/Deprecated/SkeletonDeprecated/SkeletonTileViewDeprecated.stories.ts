import type { Meta, StoryObj } from '@storybook/react'
import { SkeletonTileViewDeprecated } from './SkeletonTileViewDeprecated'

const meta = {
    title: 'entities/Article/deprecated/SkeletonTileView',
    component: SkeletonTileViewDeprecated,

    parameters: {},
} satisfies Meta<typeof SkeletonTileViewDeprecated>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
