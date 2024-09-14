import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'fullscreen'
  },

  tags: ['autodocs'],
  args: {
    options: [
      { value: 'value1', label: 'content1' },
      { value: 'value2', label: 'content2' },
      { value: 'value3', label: 'content3' }
    ]
  }
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const WithLabel: Story = {
  args: {
    label: 'label'
  }
}
