import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/6shared/const/themes'
import { ForbiddenPage } from './ForbiddenPage'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,

    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ForbiddenPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
}
