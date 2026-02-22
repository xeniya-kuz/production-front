import type { Meta, StoryObj } from '@storybook/react'
import { PageLoader } from './PageLoader'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'widgets/PageLoader',
    component: PageLoader,

    parameters: {
        loki: { skip: true },
    },
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof PageLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
