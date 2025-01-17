import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectArticlesHasMore } from './selectArticlesHasMore'

describe('selectArticlesHasMore', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      articleInfiniteList: { hasMore: true }
    }
    expect(selectArticlesHasMore(state as StateSchema)).toBe(true)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectArticlesHasMore(state as StateSchema)).toBe(undefined)
  })
})
