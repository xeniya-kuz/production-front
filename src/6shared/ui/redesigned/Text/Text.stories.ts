import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta = {
    title: 'shared/redesigned/Text',
    component: Text,
    args: {
        title: 'Title',
        text: 'Text content',
    },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const TitleOnly: Story = {
    args: { text: undefined },
}

export const TextOnly: Story = {
    args: { title: undefined },
}

export const Error: Story = {
    args: { variant: 'error' },
}

export const Accent: Story = {
    args: { variant: 'accent' },
}

export const SizeSmall: Story = {
    args: { size: 's' },
}

export const SizeLarge: Story = {
    args: { size: 'l' },
}

export const Bold: Story = {
    args: { bold: true },
}

export const CenterAlign: Story = {
    args: { align: 'center' },
}
