import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/6shared/const/themes'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta = {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
}
