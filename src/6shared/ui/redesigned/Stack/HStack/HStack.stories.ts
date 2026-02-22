import type { Meta, StoryObj } from '@storybook/react'
import { HStack } from './HStack'

const meta = {
    title: 'shared/redesigned/Stack/HStack',
    component: HStack,
    args: {
        children: 'HStack content',
        gap: '8',
    },
} satisfies Meta<typeof HStack>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Gap4: Story = {
    args: { gap: '4' },
}

export const Gap16: Story = {
    args: { gap: '16' },
}

export const Gap32: Story = {
    args: { gap: '32' },
}

export const JustifyCenter: Story = {
    args: { justify: 'center', max: true },
}

export const JustifyBetween: Story = {
    args: { justify: 'between', max: true },
}
