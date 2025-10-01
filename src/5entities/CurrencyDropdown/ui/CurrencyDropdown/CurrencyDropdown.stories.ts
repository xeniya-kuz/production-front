import type { Meta, StoryObj } from '@storybook/react'
import { CurrencyDropdown } from './CurrencyDropdown'
import { Currency } from '../../model/const/currency'

const meta = {
    title: 'features/CurrencyDropdown',
    component: CurrencyDropdown,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        onChange: () => {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CurrencyDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        value: Currency.EUR,
    },
}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
}
