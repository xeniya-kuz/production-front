import type { Meta, StoryObj } from '@storybook/react'
import { AppLink } from './AppLink'
import { RouterDecorator } from '@/6shared/config/storybook/RouterDecorator/RouterDecorator'

const meta = {
    title: 'shared/redesigned/AppLink',
    component: AppLink,
    decorators: [RouterDecorator],
    args: {
        to: '/',
        children: 'App Link',
    },
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Inverted: Story = {
    args: { variant: 'inverted' },
}
