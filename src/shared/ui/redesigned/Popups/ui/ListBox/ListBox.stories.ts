import type { Meta, StoryObj } from '@storybook/react'
import { ListBox } from './ListBox'

const meta = {
    title: 'shared/redesigned/Popups/ListBox',
    component: ListBox,
    args: {
        options: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3 (disabled)', disabled: true },
        ],
        value: 'option1',
        onChange: () => {},
    },
} satisfies Meta<typeof ListBox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const WithLabel: Story = {
    args: { label: 'Select option' },
}

export const Disabled: Story = {
    args: { disabled: true },
}

export const DirectionTop: Story = {
    args: { direction: 'top' },
}
