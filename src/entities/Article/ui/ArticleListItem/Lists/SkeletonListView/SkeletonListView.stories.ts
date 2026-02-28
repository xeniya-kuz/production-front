import type { Meta, StoryObj } from '@storybook/react'
import { SkeletonListView } from './SkeletonListView'

const meta = {
    title: 'entities/Article/SkeletonListView',
    component: SkeletonListView,
} satisfies Meta<typeof SkeletonListView>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
