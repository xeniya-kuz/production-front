import type { Meta, StoryObj } from '@storybook/react'
import LoginFormDeprecated from './LoginFormDeprecated'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const loginFormState = { username: '123', password: '123', isLoading: false }

const meta = {
    title: 'features/AuthByUsername/deprecated/LoginForm',
    component: LoginFormDeprecated,
    decorators: [StoreDecorator({ loginForm: loginFormState })],
    args: {
        onChangeUsername: () => {},
        username: 'username',
        onChangePassword: () => {},
        password: '12345',
        onLoginClick: () => {},
    },
} satisfies Meta<typeof LoginFormDeprecated>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Error: Story = {
    decorators: [
        StoreDecorator({ loginForm: { error: 'Ошибка авторизации' } }),
    ],
}

export const Loading: Story = {
    decorators: [StoreDecorator({ loginForm: { isLoading: true } })],
}
