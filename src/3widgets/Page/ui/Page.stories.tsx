import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/6shared/const/themes'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Page } from './Page'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'widgets/Page',
    component: Page,
    tags: ['autodocs'],
    args: {
        children: <></>,
    },
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
}
