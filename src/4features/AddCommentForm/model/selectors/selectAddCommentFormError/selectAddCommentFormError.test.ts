import { type StateSchema } from '1app/providers/StoreProvider'
import { selectAddCommentFormError } from './selectAddCommentFormError'
describe('selectAddCommentFormError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: { error: 'error' }
    }
    expect(selectAddCommentFormError(state as StateSchema)).toBe('error')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectAddCommentFormError(state as StateSchema)).toBe(undefined)
  })
}
)
