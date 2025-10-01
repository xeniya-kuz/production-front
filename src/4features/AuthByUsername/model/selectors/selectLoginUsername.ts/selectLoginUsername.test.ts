import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectLoginUsername } from './selectLoginUsername'

describe('selectLoginUsername', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'username',
                password: '',
                isLoading: false,
            },
        }
        expect(selectLoginUsername(state as StateSchema)).toBe('username')
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(selectLoginUsername(state as StateSchema)).toBe('')
    })
})
