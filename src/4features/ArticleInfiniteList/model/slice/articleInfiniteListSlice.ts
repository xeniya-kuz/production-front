import { type StateSchema } from '@/1app/providers/StoreProvider'
import { ArticleView, type Article } from '@/5entities/Article'
import {
    createEntityAdapter,
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit'
import { type ArticleInfiniteListSchema } from '../types/articleInfiniteListSchema'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
})

export const selectArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articleInfiniteList ?? articlesAdapter.getInitialState(),
)

const articleInfiniteListSlice = createSlice({
    name: 'articleInfiniteList',
    initialState: articlesAdapter.getInitialState<ArticleInfiniteListSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        page: 1,
        hasMore: true,
        _inited: false,
        limit: 5,
    }),
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        initState: (state) => {
            state._inited = true
        },
        setLimit: (
            state,
            { payload }: PayloadAction<{ view?: ArticleView }>,
        ) => {
            if (payload.view) {
                state.limit = payload.view === ArticleView.LIST ? 4 : 9
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state)
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false
                state.hasMore = action.payload.length >= state.limit

                action.meta.arg.replace
                    ? articlesAdapter.setAll(state, action.payload)
                    : articlesAdapter.addMany(state, action.payload)
            })
            .addCase(
                fetchArticlesList.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.isLoading = false
                    state.error = action.payload
                },
            )
    },
})

export const {
    reducer: articleInfiniteListReducer,
    actions: articleInfiniteListActions,
} = articleInfiniteListSlice
