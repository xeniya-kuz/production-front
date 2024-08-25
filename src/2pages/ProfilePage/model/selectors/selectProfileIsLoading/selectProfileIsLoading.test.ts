import { type StateSchema } from '1app/providers/StoreProvider'
import { selectProfileIsLoading } from './selectProfileIsLoading'
describe('selectProfileIsLoading', () => {
  test('should return profile loading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    }
    expect(selectProfileIsLoading(state as StateSchema)).toBe(true)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectProfileIsLoading(state as StateSchema)).toBe(undefined)
  })
}
)
