import { TestAsyncThunk } from '6shared/lib/tests/TestAsyncThunk'
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId'

const comments = [{ id: '1', text: 'Comment 1', user: { id: '1', username: 'user1' } }]

describe('fetchCommentsByArticleId', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: comments }))

    const result = await thunk.callThunk('1')

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(comments)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('1')
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
