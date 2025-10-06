/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react'
import { HStack } from './HStack'

const meta = {
    title: 'shared/Stack/HStack',
    component: HStack,
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof HStack>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: (
            <>
                <div>Block</div>
                <div>Block</div>
                <div>Block</div>
            </>
        ),
    },
}
