import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '1app/providers/StoreProvider'
import { type Article } from '5entities/Article'

export const fetchArticlesRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articleRecommendations/fetchArticlesRecommendations',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: 4
        }
      })

      if (response.data === undefined) {
        throw new Error()
      }

      return response.data
    } catch (error) {
      return rejectWithValue('fetchArticlesList error')
    }
  })
