import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { type Article } from '../types/article'

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    article: undefined,
}

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                fetchArticleById.fulfilled,
                (state, action: PayloadAction<Article>) => {
                    state.isLoading = false
                    state.article = action.payload
                },
            )
            .addCase(
                fetchArticleById.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.isLoading = false
                    state.error = action.payload
                },
            )
    },
})

export const {
    actions: articleDetailsActions,
    reducer: articleDetailsReducer,
} = articleDetailsSlice
