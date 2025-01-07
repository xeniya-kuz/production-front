import { type CommentFormSchema } from '../types/CommentForm'
import { commentFormActions, commentFormReducer } from './commentFormSlice'

describe('commentFormSlice', () => {
  test('setComment', async () => {
    const state: DeepPartial<CommentFormSchema> = { comment: 'comment' }

    expect(commentFormReducer(
      state as CommentFormSchema,
      commentFormActions.setComment('comment')
    )).toEqual(state)
  })
})
