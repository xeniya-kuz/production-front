import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/6shared/const/themes'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import LoginForm from './LoginForm'
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator'

const loginFormState = { username: '123', password: '123', isLoading: false }

const meta = {
    title: 'features/AuthByUsername/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    decorators: [StoreDecorator({ loginForm: loginFormState })],
    args: {
        onSuccess: () => {},
    },
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
}

export const Error: Story = {
    args: {},
    decorators: [
        StoreDecorator({ loginForm: { error: 'Ошибка авторизации' } }),
    ],
}

export const Loading: Story = {
    args: {},
    decorators: [StoreDecorator({ loginForm: { isLoading: true } })],
}
