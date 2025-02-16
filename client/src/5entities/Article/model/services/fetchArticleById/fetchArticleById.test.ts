import { TestAsyncThunk } from '@/6shared/lib/tests/TestAsyncThunk'
import { fetchArticleById } from './fetchArticleById'
import { articleMock } from '../../const/mocks'

describe('fetchArticleById', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: articleMock }))

    const result = await thunk.callThunk('1')

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(articleMock)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('1')
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
