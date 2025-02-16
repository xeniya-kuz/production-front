import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectAddArticleCommentFormError } from './selectAddCommentFormError'

describe('selectAddArticleCommentFormError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      commentForm: { error: 'error' }
    }
    expect(selectAddArticleCommentFormError(state as StateSchema)).toBe('error')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectAddArticleCommentFormError(state as StateSchema)).toBe(undefined)
  })
}
)
