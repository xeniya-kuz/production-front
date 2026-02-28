import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'

const meta = {
    title: 'shared/deprecated/Loader',
    component: Loader,

    // потому что анимацию сложно заскринить одинаково два раза
    parameters: {
        loki: { skip: true },
    },
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
