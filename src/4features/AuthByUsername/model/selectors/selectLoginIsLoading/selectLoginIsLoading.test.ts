import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectLoginIsLoading } from './selectLoginIsLoading'

describe('selectLoginIsLoading', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '',
                password: '',
                isLoading: true,
            },
        }
        expect(selectLoginIsLoading(state as StateSchema)).toBe(true)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(selectLoginIsLoading(state as StateSchema)).toBe(false)
    })
})
