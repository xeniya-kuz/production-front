import type { Meta, StoryObj } from '@storybook/react'
import { UiDesignSwitcher } from './UiDesignSwitcher'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'features/UiDesignSwitcher',
    component: UiDesignSwitcher,
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof UiDesignSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
