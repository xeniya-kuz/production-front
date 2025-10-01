import { type LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'username' }
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('username'),
            ),
        ).toEqual({ username: 'username' })
    })

    test('set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'password' }
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('password'),
            ),
        ).toEqual({ password: 'password' })
    })
})
