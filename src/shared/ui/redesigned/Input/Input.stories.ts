import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta = {
    title: 'shared/redesigned/Input',
    component: Input,
    args: {
        placeholder: 'Enter text...',
        value: '',
        onChange: () => {},
    },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const WithLabel: Story = {
    args: { label: 'Label' },
}

export const WithValue: Story = {
    args: { value: 'Some value' },
}

export const ReadOnly: Story = {
    args: { readOnly: true, value: 'Read-only value' },
}

export const SizeSmall: Story = {
    args: { size: 's' },
}

export const SizeLarge: Story = {
    args: { size: 'l' },
}
