import { TestAsyncThunk } from '@/6shared/lib/tests/TestAsyncThunk'
import { fetchArticlesList } from './fetchArticlesList'
import { articlesMock } from '@/6shared/const/mocks/article'

describe('fetchArticlesList', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList, {
      articleInfiniteList: { limit: 5, page: 2 }
    })
    thunk.api.get.mockReturnValue(Promise.resolve({ data: articlesMock }))

    const result = await thunk.callThunk({})

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(articlesMock)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList, {
      articleInfiniteList: { page: 2 }
    })
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk({})
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
