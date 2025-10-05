import { ArticleSortField, ArticleType, ArticleView } from '@/5entities/Article'
import { type SortOrder } from '@/6shared/types/sort'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticlesPageFiltersSchema } from '../types/articlesPageFiltersSchema'

const initialState: ArticlesPageFiltersSchema = {
    order: 'asc',
    sort: ArticleSortField.CREATED,
    search: '',
    view: ArticleView.TILE,
    type: ArticleType.ALL,
}

const articlesPageFiltersSlice = createSlice({
    name: 'articlesPageFilters',
    initialState,
    reducers: {
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload
        },
    },
})

export const {
    reducer: articlesPageFiltersReducer,
    actions: articlesPageFiltersActions,
} = articlesPageFiltersSlice
