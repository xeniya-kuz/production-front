import { type FC, lazy } from 'react'
import { type LoginFormDeprecatedProps } from './LoginFormDeprecated'

// <FC<LoginFormProps>> - чтобы типы пропсов не терялись
export const LoginFormDeprecatedAsync = lazy<FC<LoginFormDeprecatedProps>>(
    async () => await import('./LoginFormDeprecated'),
)
