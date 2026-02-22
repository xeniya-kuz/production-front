import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from './VStack'

const meta = {
    title: 'shared/redesigned/Stack/VStack',
    component: VStack,
    args: {
        children: 'VStack content',
        gap: '8',
    },
} satisfies Meta<typeof VStack>

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

export const AlignCenter: Story = {
    args: { align: 'center', max: true },
}

export const AlignEnd: Story = {
    args: { align: 'end', max: true },
}
