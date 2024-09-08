import { type StateSchema } from '1app/providers/StoreProvider'
import { selectArticlesView } from './selectArticlesView'
import { ArticleView } from '5entities/Article'
describe('selectArticlesView', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { view: ArticleView.LIST }
    }
    expect(selectArticlesView(state as StateSchema)).toBe(ArticleView.LIST)
  })
}
)
