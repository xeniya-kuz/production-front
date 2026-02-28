import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'

const meta = {
    title: 'shared/redesigned/Tabs',
    component: Tabs,
    args: {
        tabs: [
            { value: 'tab1', label: 'Tab 1' },
            { value: 'tab2', label: 'Tab 2' },
            { value: 'tab3', label: 'Tab 3' },
        ],
        activeTab: 'tab1',
        setActiveTab: () => {},
    },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Vertical: Story = {
    args: { direction: 'column' },
}

export const WithDisabled: Story = {
    args: {
        tabs: [
            { value: 'tab1', label: 'Tab 1' },
            { value: 'tab2', label: 'Tab 2', disabled: true },
            { value: 'tab3', label: 'Tab 3' },
        ],
    },
}
