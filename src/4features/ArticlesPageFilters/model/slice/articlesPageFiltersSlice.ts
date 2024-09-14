import { ArticleSortField, ArticleType, ArticleView } from '5entities/Article'
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '6shared/const/localstorage'
import { type SortOrder } from '6shared/types/order'
import {
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit'
import { type ArticlesPageFiltersSchema } from '../types/articlesPageFiltersSchema'

const initialState: ArticlesPageFiltersSchema = {
  order: 'asc',
  sort: ArticleSortField.CREATED,
  search: '',
  view: ArticleView.TILE,
  type: ArticleType.ALL
}

const articlesPageFiltersSlice = createSlice({
  name: 'articlesPageFilters',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload)
    },
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
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView
      state.view = view
    }
  }

})

export const {
  reducer: articlesPageFiltersReducer,
  actions: articlesPageFiltersActions
} = articlesPageFiltersSlice
