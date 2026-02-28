import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'
import EyeIcon from '@/shared/assets/icons/eye.svg'

const meta = {
    title: 'shared/redesigned/Icon',
    component: Icon,
    args: {
        Svg: EyeIcon,
        width: 32,
        height: 32,
    },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = {
    args: { variant: 'secondary' },
}

export const Error: Story = {
    args: { variant: 'error' },
}

export const Success: Story = {
    args: { variant: 'success' },
}

export const Clickable: Story = {
    args: {
        clickable: true,
        onClick: () => {},
        title: 'Click icon',
    },
}

export const Large: Story = {
    args: { width: 64, height: 64 },
}
