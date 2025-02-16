import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectArticlesIsLoading } from './selectArticlesIsLoading'

describe('selectArticlesIsLoading', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      articleInfiniteList: { isLoading: false }
    }
    expect(selectArticlesIsLoading(state as StateSchema)).toBe(false)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectArticlesIsLoading(state as StateSchema)).toBe(undefined)
  })
})
