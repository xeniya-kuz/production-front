import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '1app/providers/ThemeProvider'
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Text, TextAlign, TextTheme } from './Text'

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs']

} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    title: 'title',
    text: 'Задача организации, в особенности же понимание сущности ресурсосберегающих технологий влечёт за собой интересный процесс внедрения модернизации дальнейших направлений развития.'
  }
}

export const OnlyTitleLight: Story = {
  args: {
    title: 'title'
  }
}

export const OnlyTextLight: Story = {
  args: {
    text: 'Задача организации, в особенности же понимание сущности ресурсосберегающих технологий влечёт за собой интересный процесс внедрения модернизации дальнейших направлений развития.'
  }
}

export const Dark: Story = {
  args: {
    title: 'title',
    text: 'Задача организации, в особенности же понимание сущности ресурсосберегающих технологий влечёт за собой интересный процесс внедрения модернизации дальнейших направлений развития.'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const OnlyTitleDark: Story = {
  args: {
    title: 'title'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const OnlyTextDark: Story = {
  args: {
    text: 'Задача организации, в особенности же понимание сущности ресурсосберегающих технологий влечёт за собой интересный процесс внедрения модернизации дальнейших направлений развития.'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Error: Story = {
  args: {
    title: 'title',
    text: 'Задача организации, в особенности же понимание сущности ресурсосберегающих технологий влечёт за собой интересный процесс внедрения модернизации дальнейших направлений развития.',
    theme: TextTheme.ERROR
  }
}

export const OnlyTitleError: Story = {
  args: {
    title: 'title',
    theme: TextTheme.ERROR
  }
}

export const OnlyTextError: Story = {
  args: {
    text: 'Задача организации, в особенности же понимание сущности ресурсосберегающих технологий влечёт за собой интересный процесс внедрения модернизации дальнейших направлений развития.',
    theme: TextTheme.ERROR
  }
}

export const AlignRight: Story = {
  args: {
    title: 'title',
    text: 'Задача организации, в особенности же понимание сущности ресурсосберегающих технологий влечёт за собой интересный процесс внедрения модернизации дальнейших направлений развития.',
    align: TextAlign.RIGHT
  }
}

export const AlignCenter: Story = {
  args: {
    title: 'title',
    text: 'Задача организации, в особенности же понимание сущности ресурсосберегающих технологий влечёт за собой интересный процесс внедрения модернизации дальнейших направлений развития.',
    align: TextAlign.CENTER
  }
}
