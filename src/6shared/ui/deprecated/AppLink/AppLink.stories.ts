import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'

const meta = {
    title: 'shared/deprecated/AppLink',
    component: AppLink,

    args: { to: '/', children: 'App Link' },
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Inverted: Story = {
    args: {
        theme: AppLinkTheme.INVERTED,
    },
}
