import { TestAsyncThunk } from '@/6shared/lib/tests/TestAsyncThunk'
import { fetchNextArticlesPage } from './fetchNextArticlesPage'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('fetchNextArticlesPage', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articleInfiniteList: {
                page: 2,
                limit: 5,
                ids: [],
                entities: {},
                isLoading: false,
                hasMore: true,
            },
        })

        await thunk.callThunk()

        // pending, fulfilled, dispatch(articlesPageActions.setPage),  dispatch(fetchArticlesList)
        expect(thunk.dispatch).toHaveBeenCalledTimes(4)
        expect(fetchArticlesList).toHaveBeenCalledWith({})
    })

    test('fetchArticlesList not called (hasMore = false)', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articleInfiniteList: {
                page: 2,
                limit: 5,
                ids: [],
                entities: {},
                isLoading: false,
                hasMore: false,
            },
        })

        await thunk.callThunk()

        // pending, fulfilled
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(fetchArticlesList).not.toHaveBeenCalled()
    })

    test('fetchArticlesList not called (isLoading = true)', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articleInfiniteList: {
                page: 2,
                limit: 5,
                ids: [],
                entities: {},
                isLoading: true,
                hasMore: true,
            },
        })

        await thunk.callThunk()

        // pending, fulfilled
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(fetchArticlesList).not.toHaveBeenCalled()
    })
})
