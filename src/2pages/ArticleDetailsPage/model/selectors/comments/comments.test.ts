import { type StateSchema } from '1app/providers/StoreProvider'
import { selectArticleCommentsError, selectArticleCommentsIsLoading } from './comments'

describe('ArticleDetailsPage', () => {
  test('selectArticleCommentsIsLoading ', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: { isLoading: true }
    }
    expect(selectArticleCommentsIsLoading(state as StateSchema)).toBe(true)
  })

  test('selectArticleCommentsIsLoading should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectArticleCommentsIsLoading(state as StateSchema)).toBe(undefined)
  })

  test('selectArticleCommentsError ', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: { error: 'error' }
    }
    expect(selectArticleCommentsError(state as StateSchema)).toBe('error')
  })

  test('selectArticleCommentsError should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectArticleCommentsError(state as StateSchema)).toBe(undefined)
  })
}
)
