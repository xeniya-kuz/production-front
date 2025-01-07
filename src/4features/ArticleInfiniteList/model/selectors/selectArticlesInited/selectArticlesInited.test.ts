import { type StateSchema } from '1app/providers/StoreProvider'
import { selectArticlesInited } from './selectArticlesInited'

describe('selectArticlesInited', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      articleInfiniteList: { _inited: true }
    }
    expect(selectArticlesInited(state as StateSchema)).toBe(true)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectArticlesInited(state as StateSchema)).toBe(undefined)
  })
})
