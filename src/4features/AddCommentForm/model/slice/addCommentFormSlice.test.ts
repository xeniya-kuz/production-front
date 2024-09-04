import { type AddCommentFormSchema } from '../types/addCommentForm'
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice'

describe('addCommentFormSlice', () => {
  test('setComment', async () => {
    const state: DeepPartial<AddCommentFormSchema> = { comment: 'comment' }

    expect(addCommentFormReducer(
      state as AddCommentFormSchema,
      addCommentFormActions.setComment('comment')
    )).toEqual(state)
  })
})
