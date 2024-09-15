import { type StateSchema } from '1app/providers/StoreProvider'
import {
  createEntityAdapter,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit'
import { type ArticleRecommendationsSchema } from '../types/articleRecommendationsSchema'
import { type Article } from '5entities/Article'
import { fetchArticlesRecommendations } from '../services/fetchArticlesRecommendations/fetchArticlesRecommendations'

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article: Article) => article.id
})

export const selectArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>((state) => state.articleRecommendations ?? recommendationsAdapter.getInitialState())

const articleRecommendationsSlice = createSlice({
  name: 'articleRecommendations',
  initialState: recommendationsAdapter.getInitialState<ArticleRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesRecommendations.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticlesRecommendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        recommendationsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticlesRecommendations.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { reducer: articleRecommendationsReducer } = articleRecommendationsSlice
