import { TestAsyncThunk } from '@/6shared/lib/tests/TestAsyncThunk'
import { addArticleComment } from './addArticleComment'
import { userMock } from '@/5entities/User'
import { commentMock } from '@/5entities/Comment'

describe('addArticleComment', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(addArticleComment, {
      user: { authData: userMock },
      articleDetails: { article: { id: '1' } }
    })
    thunk.api.post.mockReturnValue(Promise.resolve({ data: commentMock }))

    const result = await thunk.callThunk('comment')

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(commentMock)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(addArticleComment)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('1')
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
