import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Text, TextAlign, TextSize, TextTheme } from './Text'
import { Theme } from '@/6shared/const/themes'

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    title: 'title',
    text: 'Задача организации, в особенности же понимание сущности ресурсосберегающих технологий влечёт за собой интересный процесс внедрения модернизации дальнейших направлений развития.'
  }

} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const OnlyTitleLight: Story = {
  args: {
    text: undefined
  }
}

export const OnlyTextLight: Story = {
  args: {
    title: undefined
  }
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const OnlyTitleDark: Story = {
  args: {
    text: undefined
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const OnlyTextDark: Story = {
  args: {
    title: undefined
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Error: Story = {
  args: {
    theme: TextTheme.ERROR
  }
}

export const OnlyTitleError: Story = {
  args: {
    theme: TextTheme.ERROR,
    text: undefined
  }
}

export const OnlyTextError: Story = {
  args: {
    title: undefined,
    theme: TextTheme.ERROR
  }
}

export const AlignRight: Story = {
  args: {
    align: TextAlign.RIGHT
  }
}

export const SizeS: Story = {
  args: {
    size: TextSize.S
  }
}

export const SizeM: Story = {
  args: {
    size: TextSize.M
  }
}

export const SizeL: Story = {
  args: {
    size: TextSize.L
  }
}
