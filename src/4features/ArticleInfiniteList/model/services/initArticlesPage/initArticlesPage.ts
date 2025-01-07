import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '1app/providers/StoreProvider'
import { selectArticlesInited } from '../../selectors/selectArticlesInited/selectArticlesInited'
import { articleInfiniteListActions } from '../../slice/articleInfiniteListSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { type ArticleType, type ArticleSortField } from '5entities/Article'
import { type SortOrder } from '6shared/types/order'
import { selectArticlesView, articlesPageFiltersActions } from '4features/ArticlesPageFilters'

export const init = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articleInfiniteList/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI

    const inited = selectArticlesInited(getState())
    const view = selectArticlesView(getState())

    if (inited !== true) {
      const orderFromURL = searchParams.get('order')
      const sortFromURL = searchParams.get('sort')
      const searchFromURL = searchParams.get('search')
      const typeFromURL = searchParams.get('type')

      if (orderFromURL !== null) {
        dispatch(articlesPageFiltersActions.setOrder(orderFromURL as SortOrder))
      }

      if (sortFromURL !== null) {
        dispatch(articlesPageFiltersActions.setSort(sortFromURL as ArticleSortField))
      }

      if (searchFromURL !== null) {
        dispatch(articlesPageFiltersActions.setSearch(searchFromURL))
      }

      if (typeFromURL !== null) {
        dispatch(articlesPageFiltersActions.setType(typeFromURL as ArticleType))
      }

      dispatch(articleInfiniteListActions.initState({ view }))
      void dispatch(fetchArticlesList({}))
    }
  })
