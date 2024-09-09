import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '1app/providers/StoreProvider'
import { selectArticlesInited } from '../../selectors/selectArticlesInited/selectArticlesInited'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI

    const inited = selectArticlesInited(getState())

    if (inited !== true) {
      dispatch(articlesPageActions.initState())
      void dispatch(fetchArticlesList({ page: 1 }))
    }
  })
