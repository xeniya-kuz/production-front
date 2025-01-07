import { type StateSchema } from '1app/providers/StoreProvider'
import { selectAddArticleCommentFormIsLoading } from './selectAddCommentFormIsLoading'

describe('selectAddArticleCommentFormIsLoading', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      commentForm: { isLoading: true }
    }
    expect(selectAddArticleCommentFormIsLoading(state as StateSchema)).toBe(true)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectAddArticleCommentFormIsLoading(state as StateSchema)).toBe(undefined)
  })
}
)
