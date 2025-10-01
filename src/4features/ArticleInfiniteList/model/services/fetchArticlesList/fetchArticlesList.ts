import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/1app/providers/StoreProvider'
import { ArticleType, type Article } from '@/5entities/Article'
import { selectArticlesLimit } from '../../selectors/selectArticlesLimit/selectArticlesLimit'
import { addQueryParams } from '@/6shared/lib/url/addQueryParams/addQueryParams'
// eslint-disable-next-line fsd-path-checker-sia355/layer-imports
import {
    selectArticlesSort,
    selectArticlesOrder,
    selectArticlesSearch,
    selectArticlesType,
} from '@/4features/ArticlesPageFilters'

import { selectArticlesNum } from '../../selectors/selectArticlesNum/selectArticlesNum'

interface FetchArticlesListProps {
    replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>('articleInfiniteList/fetchArticlesList', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const limit = selectArticlesLimit(getState())
    const sort = selectArticlesSort(getState())
    const order = selectArticlesOrder(getState())
    const search = selectArticlesSearch(getState())
    const page = selectArticlesNum(getState())
    const type = selectArticlesType(getState())

    try {
        addQueryParams({
            sort,
            order,
            search,
            type,
        })
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                q: search.length > 0 ? search : undefined,
                type: type === ArticleType.ALL ? undefined : type,
            },
        })

        if (response.data === undefined) {
            throw new Error()
        }

        return response.data
    } catch (error) {
        return rejectWithValue('fetchArticlesList error')
    }
})
