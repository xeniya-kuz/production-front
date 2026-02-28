import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextAlign, TextSize, TextTheme } from './Text'

const meta = {
    title: 'shared/deprecated/Text',
    component: Text,

    args: {
        title: 'title',
        text: 'Задача организации, в особенности же понимание сущности ресурсосберегающих технологий влечёт за собой интересный процесс внедрения модернизации дальнейших направлений развития.',
    },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const OnlyTitle: Story = {
    args: {
        text: undefined,
    },
}

export const OnlyText: Story = {
    args: {
        title: undefined,
    },
}

export const Error: Story = {
    args: {
        theme: TextTheme.ERROR,
    },
}

export const OnlyTitleError: Story = {
    args: {
        theme: TextTheme.ERROR,
        text: undefined,
    },
}

export const OnlyTextError: Story = {
    args: {
        title: undefined,
        theme: TextTheme.ERROR,
    },
}

export const AlignRight: Story = {
    args: {
        align: TextAlign.RIGHT,
    },
}

export const SizeS: Story = {
    args: {
        size: TextSize.S,
    },
}

export const SizeM: Story = {
    args: {
        size: TextSize.M,
    },
}

export const SizeL: Story = {
    args: {
        size: TextSize.L,
    },
}
