import { type StateSchema } from '1app/providers/StoreProvider'
import { selectArticlesSearch } from './selectArticlesSearch'

describe('selectArticlesSearch', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPageFilters: { search: 'search' }
    }
    expect(selectArticlesSearch(state as StateSchema)).toBe('search')
  })
}
)
