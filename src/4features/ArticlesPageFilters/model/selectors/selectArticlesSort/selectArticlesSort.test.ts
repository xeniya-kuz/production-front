import { type StateSchema } from '1app/providers/StoreProvider'
import { selectArticlesSort } from './selectArticlesSort'
import { ArticleSortField } from '5entities/Article'

describe('selectArticlesSort', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPageFilters: { sort: ArticleSortField.CREATED }
    }
    expect(selectArticlesSort(state as StateSchema)).toBe(ArticleSortField.CREATED)
  })
}
)
