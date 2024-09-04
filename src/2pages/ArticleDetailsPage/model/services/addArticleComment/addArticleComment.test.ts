import { TestAsyncThunk } from '6shared/lib/tests/TestAsyncThunk'
import { addArticleComment } from './addArticleComment'

const user = { id: '1', username: 'user1' }
const comment = { id: '1', text: 'Comment 1', user }

describe('addArticleComment', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(addArticleComment, {
      user: { authData: user },
      articleDetails: { article: { id: '1' } }
    })
    thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }))

    const result = await thunk.callThunk('comment')

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(comment)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(addArticleComment)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('1')
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
