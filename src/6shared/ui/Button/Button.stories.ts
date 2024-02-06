import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonSize, ButtonTheme } from './Button'

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
    theme: ButtonTheme.CLEAR
  }
}

export const ClearInverted: Story = {
  args: {
    theme: ButtonTheme.CLEAR_INVERTED
  }
}

export const OutlineSizeM: Story = {
  args: {
    theme: ButtonTheme.OUTLINE
  }
}

export const OutlineSizeL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
  }
}
export const OutlineSizeXL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
  }
}

export const OutlineInverted: Story = {
  args: {
    theme: ButtonTheme.OUTLINE_INVERTED
  }
}

export const Background: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND
  }
}

export const BackgroundInverted: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const SquareSizeM: Story = {
  args: {
    children: '>',
    square: true,
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const SquareSizeL: Story = {
  args: {
    children: '>',
    square: true,
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    square: true,
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}
