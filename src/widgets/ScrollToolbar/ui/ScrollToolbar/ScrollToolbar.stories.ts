import type { Meta, StoryObj } from '@storybook/react'
import { ScrollToolbar } from './ScrollToolbar'

const meta = {
    title: 'widgets/ScrollToolbar',
    component: ScrollToolbar,
} satisfies Meta<typeof ScrollToolbar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
