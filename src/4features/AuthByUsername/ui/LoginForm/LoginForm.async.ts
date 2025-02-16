import { type FC, lazy } from 'react'
import { type LoginFormProps } from './LoginForm'

// <FC<LoginFormProps>> - чтобы типы пропсов не терялись
export const LoginFormAsync = lazy<FC<LoginFormProps>>(async () => await import('./LoginForm'))
