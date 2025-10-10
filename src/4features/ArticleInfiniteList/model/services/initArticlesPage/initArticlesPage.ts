import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/1app/providers/StoreProvider'
import { selectArticlesInited } from '../../selectors/selectArticlesInited/selectArticlesInited'
import { articleInfiniteListActions } from '../../slice/articleInfiniteListSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import {
    type ArticleType,
    type ArticleSortField,
    type ArticleView,
} from '@/5entities/Article'
import { type SortOrder } from '@/6shared/types/sort'
// TODO: спустить в entities???
// eslint-disable-next-line fsd-path-checker-sia355/layer-imports
import { articlesPageFiltersActions } from '@/3widgets/ArticlesFilters'

export const init = createAsyncThunk<
    void,
    { searchParams: URLSearchParams; view: ArticleView },
    ThunkConfig<string>
>(
    'articleInfiniteList/initArticlesPage',
    async ({ searchParams, view }, thunkAPI) => {
        const { getState, dispatch } = thunkAPI
        const inited = selectArticlesInited(getState())

        if (!inited) {
            const orderFromURL = searchParams.get('order')
            const sortFromURL = searchParams.get('sort')
            const searchFromURL = searchParams.get('search')
            const typeFromURL = searchParams.get('type')

            if (orderFromURL) {
                dispatch(
                    articlesPageFiltersActions.setOrder(
                        orderFromURL as SortOrder,
                    ),
                )
            }

            if (sortFromURL) {
                dispatch(
                    articlesPageFiltersActions.setSort(
                        sortFromURL as ArticleSortField,
                    ),
                )
            }

            if (searchFromURL) {
                dispatch(articlesPageFiltersActions.setSearch(searchFromURL))
            }

            if (typeFromURL) {
                dispatch(
                    articlesPageFiltersActions.setType(
                        typeFromURL as ArticleType,
                    ),
                )
            }

            dispatch(
                articleInfiniteListActions.initState({
                    view,
                }),
            )
            void dispatch(fetchArticlesList({}))
        }
    },
)
