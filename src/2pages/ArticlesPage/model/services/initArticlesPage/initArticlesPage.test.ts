import { TestAsyncThunk } from '6shared/lib/tests/TestAsyncThunk'
import { initArticlesPage } from './initArticlesPage'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

jest.mock('../fetchArticlesList/fetchArticlesList')

// !проверить, что в инициализированном диспатчи отработали, а в не инициализированом - нет

describe('initArticlesPage', () => {
  test('state was not initialized before', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: { _inited: false }
    })

    await thunk.callThunk()

    expect(fetchArticlesList).toHaveBeenCalled()
    // dispatch(articlesPageActions...), dispatch(fetchArticlesList(...)), initArticlesPage.pending, initArticlesPage.fulfilled
    expect(thunk.dispatch).toHaveBeenCalledTimes(4)
  })

  test('state was initialized before', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: { _inited: true }
    })

    await thunk.callThunk()

    expect(fetchArticlesList).not.toHaveBeenCalled()
    // initArticlesPage.pending, initArticlesPage.fulfilled
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
  })
})
