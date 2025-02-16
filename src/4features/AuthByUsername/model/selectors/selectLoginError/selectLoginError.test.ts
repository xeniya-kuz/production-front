import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectLoginError } from './selectLoginError'

describe('selectLoginError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error', username: '', password: '', isLoading: false
      }
    }
    expect(selectLoginError(state as StateSchema)).toBe('error')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectLoginError(state as StateSchema)).toBe(undefined)
  })
}
)
