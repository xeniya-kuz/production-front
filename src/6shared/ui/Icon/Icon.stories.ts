import type { Meta, StoryObj } from '@storybook/react'
import { Icon, IconColors } from './Icon'
import EyeIcon from '@/6shared/assets/icons/eye-20-20.svg'

const meta = {
  title: 'shared/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    Svg: EyeIcon
  }

} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const PRIMARY_FILL: Story = {
  args: {
    color: IconColors.PRIMARY_FILL
  }
}

export const SECONDARY_FILL: Story = {
  args: {
    color: IconColors.SECONDARY_FILL
  }
}

export const INVERTED_PRIMARY_FILL: Story = {
  args: {
    color: IconColors.INVERTED_PRIMARY_FILL
  }
}

export const INVERTED_SECONDARY_FILL: Story = {
  args: {
    color: IconColors.INVERTED_SECONDARY_FILL
  }
}

export const PRIMARY_STROKE: Story = {
  args: {
    color: IconColors.PRIMARY_STROKE
  }
}

export const SECONDARY_STROKE: Story = {
  args: {
    color: IconColors.SECONDARY_STROKE
  }
}

export const INVERTED_PRIMARY_STROKE: Story = {
  args: {
    color: IconColors.INVERTED_PRIMARY_STROKE
  }
}

export const INVERTED_SECONDARY_STROKE: Story = {
  args: {
    color: IconColors.INVERTED_SECONDARY_STROKE
  }
}
