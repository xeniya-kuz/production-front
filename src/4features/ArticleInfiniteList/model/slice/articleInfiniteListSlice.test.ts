import { ArticleView } from '@/5entities/Article'
import { articlesMock } from '@/5entities/Article/model/const/mocks'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { type ArticleInfiniteListSchema } from '../types/articleInfiniteListSchema'
import {
    articleInfiniteListActions,
    articleInfiniteListReducer,
} from './articleInfiniteListSlice'
import { VIEW_LIMIT_LIST, VIEW_LIMIT_TILE } from '../../../../5entities/Article'

const initialState: ArticleInfiniteListSchema = {
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    page: 1,
    hasMore: true,
    _inited: false,
    limit: 5,
}

describe('articleInfiniteListSlice', () => {
    test('setPage - should update page number', () => {
        expect(
            articleInfiniteListReducer(
                initialState,
                articleInfiniteListActions.setPage(3),
            ),
        ).toEqual({ ...initialState, page: 3 })
    })

    test('initState - should set _inited to true', () => {
        expect(
            articleInfiniteListReducer(
                initialState,
                articleInfiniteListActions.initState(),
            ),
        ).toEqual({ ...initialState, _inited: true })
    })

    test('setLimit - should set limit to VIEW_LIMIT_LIST for LIST view', () => {
        expect(
            articleInfiniteListReducer(
                initialState,
                articleInfiniteListActions.setLimit({ view: ArticleView.LIST }),
            ),
        ).toEqual({ ...initialState, limit: VIEW_LIMIT_LIST })
    })

    test('setLimit - should set limit to VIEW_LIMIT_TILE for TILE view', () => {
        expect(
            articleInfiniteListReducer(
                initialState,
                articleInfiniteListActions.setLimit({ view: ArticleView.TILE }),
            ),
        ).toEqual({ ...initialState, limit: VIEW_LIMIT_TILE })
    })

    test('fetchArticlesList.pending - should set isLoading to true', () => {
        const action = {
            type: fetchArticlesList.pending.type,
            meta: { arg: {} },
        }
        const state = articleInfiniteListReducer(initialState, action)
        expect(state.isLoading).toBe(true)
        expect(state.error).toBeUndefined()
    })

    test('fetchArticlesList.fulfilled - should add articles and set hasMore', () => {
        const action = {
            type: fetchArticlesList.fulfilled.type,
            payload: articlesMock,
            meta: { arg: {} },
        }
        const state = articleInfiniteListReducer(
            { ...initialState, isLoading: true },
            action,
        )
        expect(state.isLoading).toBe(false)
        expect(state.ids).toHaveLength(articlesMock.length)
        // articlesMock has 3 items, limit is 5 → hasMore = false
        expect(state.hasMore).toBe(false)
    })

    test('fetchArticlesList.rejected - should set error and stop loading', () => {
        const action = {
            type: fetchArticlesList.rejected.type,
            payload: 'error',
        }
        const state = articleInfiniteListReducer(
            { ...initialState, isLoading: true },
            action,
        )
        expect(state.isLoading).toBe(false)
        expect(state.error).toBe('error')
    })
})
