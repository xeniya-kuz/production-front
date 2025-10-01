import { TestAsyncThunk } from '@/6shared/lib/tests/TestAsyncThunk'
import { init } from './initArticlesPage'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('initArticlesPage', () => {
    const searchParams = new URLSearchParams(window.location.search)

    test('state was not initialized before', async () => {
        const thunk = new TestAsyncThunk(init, {
            articleInfiniteList: { _inited: false },
        })

        await thunk.callThunk(searchParams)

        expect(fetchArticlesList).toHaveBeenCalled()
        // dispatch(articlesPageActions...), dispatch(fetchArticlesList(...)), initArticlesPage.pending, initArticlesPage.fulfilled
        expect(thunk.dispatch).toHaveBeenCalledTimes(4)
    })

    test('state was initialized before', async () => {
        const thunk = new TestAsyncThunk(init, {
            articleInfiniteList: { _inited: true },
        })

        await thunk.callThunk(searchParams)

        expect(fetchArticlesList).not.toHaveBeenCalled()
        // initArticlesPage.pending, initArticlesPage.fulfilled
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    })
})
