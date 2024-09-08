import { type StateSchema } from '1app/providers/StoreProvider'
import { selectArticlesPageLimit } from './selectArticlesPageLimit'

describe('selectArticlesPageLimit', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { limit: 5 }
    }
    expect(selectArticlesPageLimit(state as StateSchema)).toBe(5)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectArticlesPageLimit(state as StateSchema)).toBe(undefined)
  })
})
