import { type StateSchema } from '1app/providers/StoreProvider'
import { selectLoginPassword } from './selectLoginPassword'

describe('selectLoginPassword', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '', password: '123123', isLoading: false
      }
    }
    expect(selectLoginPassword(state as StateSchema)).toBe('123123')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectLoginPassword(state as StateSchema)).toBe('')
  })
}
)
