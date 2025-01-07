import { type StateSchema } from '1app/providers/StoreProvider'
import { selectProfileError } from './selectProfileError'

describe('selectProfileError', () => {
  test('should return profile error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error'
      }
    }
    expect(selectProfileError(state as StateSchema)).toBe('error')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectProfileError(state as StateSchema)).toBe(undefined)
  })
}
)
