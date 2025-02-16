import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectUserAuthData } from './selectUserAuthData'

describe('selectUserAuthData', () => {
  test('success', () => {
    const user = { id: '0', username: 'foo' }
    const state: DeepPartial<StateSchema> = {
      user: { authData: { id: '0', username: 'foo' } }
    }
    expect(selectUserAuthData(state as StateSchema)).toEqual(user)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectUserAuthData(state as StateSchema)).toBe(undefined)
  })
}
)
