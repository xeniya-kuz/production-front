import type { Meta, StoryObj } from '@storybook/react'
import { SkeletonListViewDeprecated } from './SkeletonListViewDeprecated'

const meta = {
    title: 'entities/Article/deprecated/SkeletonListView',
    component: SkeletonListViewDeprecated,

    parameters: {},
} satisfies Meta<typeof SkeletonListViewDeprecated>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
