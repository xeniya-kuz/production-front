import type { Meta, StoryObj } from '@storybook/react'
import { Code } from './Code'

const meta = {
    title: 'shared/deprecated/Code',
    component: Code,
    parameters: {},

    args: {
        code:
            "import type { Meta, StoryObj } from '@storybook/react'\n" +
            "import { Code } from './Code'\n" +
            '\n' +
            'const meta = {\n' +
            "title: 'shared/Code',\n" +
            '  component: Code,\n' +
            '  parameters: {\n' +
            "    layout: 'fullscreen'\n" +
            '  },`\n',
    },
} satisfies Meta<typeof Code>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
