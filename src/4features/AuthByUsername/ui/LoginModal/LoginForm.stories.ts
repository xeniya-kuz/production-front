import type { Meta, StoryObj } from '@storybook/react'
import { LoginModal } from './LoginModal'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'

const loginFormState = { username: '123', password: '123', isLoading: false }

const meta = {
    title: 'features/AuthByUsername/LoginModal',
    component: LoginModal,
    tags: ['autodocs'],
    decorators: [StoreDecorator({ loginForm: loginFormState })],
    args: {
        isOpen: true,
        onClose: () => {},
    },
} satisfies Meta<typeof LoginModal>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}
