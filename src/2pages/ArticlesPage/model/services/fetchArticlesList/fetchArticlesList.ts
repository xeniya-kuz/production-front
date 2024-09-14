import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '1app/providers/StoreProvider'
import { ArticleType, type Article } from '5entities/Article'
import { selectArticlesPageLimit } from '../../selectors/selectArticlesPageLimit/selectArticlesPageLimit'
import { addQueryParams } from '6shared/lib/url/addQueryParams/addQueryParams'
import { selectArticlesSort } from '4features/ArticlesPageFilters/model/selectors/selectArticlesSort/selectArticlesSort'
import { selectArticlesOrder } from '4features/ArticlesPageFilters/model/selectors/selectArticlesOrder/selectArticlesOrder'
import { selectArticlesSearch } from '4features/ArticlesPageFilters/model/selectors/selectArticlesSearch/selectArticlesSearch'
import { selectArticlesPageNum } from '../../selectors/selectArticlesPageNum/selectArticlesPageNum'
import { selectArticlesType } from '4features/ArticlesPageFilters/model/selectors/selectArticlesType/selectArticlesType'

interface FetchArticlesListProps {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const limit = selectArticlesPageLimit(getState())
    const sort = selectArticlesSort(getState())
    const order = selectArticlesOrder(getState())
    const search = selectArticlesSearch(getState())
    const page = selectArticlesPageNum(getState())
    const type = selectArticlesType(getState())

    try {
      addQueryParams({
        sort, order, search, type
      })
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: (search.length > 0) ? search : undefined,
          type: type === ArticleType.ALL ? undefined : type
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
