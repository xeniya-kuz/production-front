import { type StateSchema } from '1app/providers/StoreProvider'
import { ArticleView, type Article } from '5entities/Article'
import {
  createEntityAdapter,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit'
import { type ArticlesPageSchema } from '../types/articlesPageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '6shared/const/localstorage'

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const selectArticles = articlesAdapter.getSelectors<StateSchema>((state) => state.articlesPage ?? articlesAdapter.getInitialState())

const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    view: undefined,
    ids: [],
    entities: {},
    page: 1,
    hasMore: true
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView
      state.view = view
      state.limit = view === ArticleView.LIST ? 4 : 9
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        articlesAdapter.addMany(state, action.payload)
        state.hasMore = action.payload.length > 0
      })
      .addCase(fetchArticlesList.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const {
  reducer: articlesPageReducer,
  actions: articlesPageActions
} = articlesPageSlice
