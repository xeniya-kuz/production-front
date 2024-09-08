import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '1app/providers/StoreProvider'
import { type Article } from '5entities/Article'
import { selectArticlesPageLimit } from '../../selectors/selectArticlesPageLimit/selectArticlesPageLimit'

interface FetchArticlesListProps {
  page?: number
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (args, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const { page = 1 } = args
    const limit = selectArticlesPageLimit(getState())

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page
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
