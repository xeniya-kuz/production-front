/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from './VStack'

const meta = {
    title: 'shared/Stack/VStack',
    component: VStack,
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof VStack>

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
