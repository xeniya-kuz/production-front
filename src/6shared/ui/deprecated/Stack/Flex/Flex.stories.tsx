/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from './Flex'

const meta = {
    title: 'shared/Stack/Flex',
    component: Flex,
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Flex>

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
