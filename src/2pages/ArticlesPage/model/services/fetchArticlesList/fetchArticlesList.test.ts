import { TestAsyncThunk } from '6shared/lib/tests/TestAsyncThunk'
import { fetchArticlesList } from './fetchArticlesList'
import { articlesMock } from '6shared/const/mocks/article'

describe('fetchArticlesList', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList, {
      articlesPage: { limit: 5 }
    })
    thunk.api.get.mockReturnValue(Promise.resolve({ data: articlesMock }))

    const result = await thunk.callThunk({ page: 2 })

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(articlesMock)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk({ page: 2 })
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
