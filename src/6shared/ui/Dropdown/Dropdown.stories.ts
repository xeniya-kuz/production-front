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
      { value: 'value1', content: 'content1' },
      { value: 'value2', content: 'content2' },
      { value: 'value3', content: 'content3' }
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
