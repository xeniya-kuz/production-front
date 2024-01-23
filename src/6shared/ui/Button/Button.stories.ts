import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'
import { Theme } from '1app/providers/ThemeProvider'
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Button',
  component: Button,
  // подключила глобально в preview
  parameters: {
  //   Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // глобально не подключается
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // прокидывается в каждую stories в этом файле
  args: { children: 'Text' }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
  }
}

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR
  }
}

export const Outline: Story = {
  args: {
    theme: ThemeButton.OUTLINE
  }
}

export const OutlineDark: Story = {
  args: {
    theme: ThemeButton.OUTLINE
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
