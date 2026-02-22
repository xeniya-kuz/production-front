import type { Meta, StoryObj } from '@storybook/react'
import { LangSwitcher } from './LangSwitcher'

const meta = {
    title: 'features/LangSwitcher',
    component: LangSwitcher,
} satisfies Meta<typeof LangSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Short: Story = {
    args: { short: true },
}
