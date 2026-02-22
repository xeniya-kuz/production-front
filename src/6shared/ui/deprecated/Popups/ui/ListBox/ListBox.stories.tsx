import type { Meta, StoryObj } from '@storybook/react'
import { ListBox } from './ListBox'

const meta = {
    title: 'shared/deprecated/Popups/ListBox',
    component: ListBox,

    args: {
        value: 'value3',
        options: [
            { value: 'value1', label: 'content1111111' },
            { value: 'value2', label: 'content2222222' },
            { value: 'value3', label: 'content3333333' },
        ],
        onChange: () => {},
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '200px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof ListBox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
