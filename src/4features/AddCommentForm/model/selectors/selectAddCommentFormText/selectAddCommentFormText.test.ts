import { type StateSchema } from '1app/providers/StoreProvider'
import { selectAddCommentFormText } from './selectAddCommentFormText'
describe('selectAddCommentFormText', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: { comment: 'comment' }
    }
    expect(selectAddCommentFormText(state as StateSchema)).toBe('comment')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectAddCommentFormText(state as StateSchema)).toBe(undefined)
  })
}
)
