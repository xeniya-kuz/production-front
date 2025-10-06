import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/6shared/const/themes'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Tabs } from './Tabs'
import { fn } from '@storybook/test'

const meta = {
    title: 'shared/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    args: {
        activeTab: 'value1',
        setActiveTab: fn(),
        tabs: [
            { label: 'tab1', value: 'value1' },
            { label: 'tab2', value: 'value2' },
            { label: 'tab3', value: 'value3' },
        ],
    },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}
