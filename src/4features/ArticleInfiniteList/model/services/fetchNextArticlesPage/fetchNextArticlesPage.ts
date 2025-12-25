import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/1app/providers/StoreProvider'
import { selectArticlesHasMore } from '../../selectors/selectArticlesHasMore/selectArticlesHasMore'
import { selectArticlesNum } from '../../selectors/selectArticlesNum/selectArticlesNum'
import { selectArticlesIsLoading } from '../../selectors/selectArticlesIsLoading/selectArticlesIsLoading'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { articleInfiniteListActions } from '../../slice/articleInfiniteListSlice'

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articleInfiniteList/fetchNextArticlesPageProps', async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const hasMore = selectArticlesHasMore(getState())
    const page = selectArticlesNum(getState())
    const isLoading = selectArticlesIsLoading(getState())

    if (hasMore && !isLoading) {
        dispatch(articleInfiniteListActions.setPage(page + 1))
        void dispatch(fetchArticlesList({}))
    }
})
