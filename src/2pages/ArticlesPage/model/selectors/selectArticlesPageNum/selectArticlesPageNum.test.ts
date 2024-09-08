import { type StateSchema } from '1app/providers/StoreProvider'
import { selectArticlesPageNum } from './selectArticlesPageNum'
describe('selectArticlesPageNum', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { page: 2 }
    }
    expect(selectArticlesPageNum(state as StateSchema)).toBe(2)
  })
}
)
