import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '1app/providers/StoreProvider'
import { selectArticlesPageHasMore } from '../../selectors/selectArticlesPageHasMore/selectArticlesPageHasMore'
import { selectArticlesPageNum } from '../../selectors/selectArticlesPageNum/selectArticlesPageNum'
import { selectArticlesIsLoading } from '../../selectors/selectArticlesIsLoading/selectArticlesIsLoading'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '../../slice/articlesPageSlice'

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesPageProps',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const hasMore = selectArticlesPageHasMore(getState())
    const page = selectArticlesPageNum(getState())
    const isLoading = selectArticlesIsLoading(getState())

    if (hasMore === true && isLoading !== true) {
      dispatch(articlesPageActions.setPage(page + 1))
      void dispatch(fetchArticlesList({ page: page + 1 }))
    }
  })
