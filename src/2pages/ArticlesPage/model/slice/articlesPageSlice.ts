import { type StateSchema } from '1app/providers/StoreProvider'
import { ArticleView, type Article } from '5entities/Article'
import {
  createEntityAdapter,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit'
import { type ArticlesPageSchema } from '../types/articlesPageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const selectArticles = articlesAdapter.getSelectors<StateSchema>((state) => state.articlesPage ?? articlesAdapter.getInitialState())

const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    page: 1,
    hasMore: true,
    _inited: false,
    limit: 5
  }),
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    initState: (state, { payload }: PayloadAction<{ view: ArticleView }>) => {
      state.limit = payload.view === ArticleView.LIST ? 4 : 9
      state._inited = true
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
        if (action.meta.arg.replace === true) {
          articlesAdapter.removeAll(state)
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false
        state.hasMore = action.payload.length >= state.limit

        action.meta.arg.replace === true
          ? articlesAdapter.setAll(state, action.payload)
          : articlesAdapter.addMany(state, action.payload)
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
