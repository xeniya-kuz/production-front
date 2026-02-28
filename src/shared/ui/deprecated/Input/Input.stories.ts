import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta = {
    title: 'shared/deprecated/Input',
    component: Input,

    args: {
        value: 'text',
        placeholder: 'Введите текст',
    },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
