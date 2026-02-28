import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { selectUserAuthData } from '@/entities/User'
import { selectArticleDetails } from '@/entities/Article'
import { type Comment } from '@/entities/Comment'

export const addArticleComment = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('articleComments/addArticleComment', async (comment, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const user = selectUserAuthData(getState())
    const article = selectArticleDetails(getState())

    if (!user || !article) {
        return rejectWithValue('no data')
    }

    try {
        const response = await extra.api.post<Comment>('/comments', {
            articleId: article.id,
            userId: user.id,
            text: comment,
        })

        if (!response.data) {
            throw new Error()
        }

        return { ...response.data, user }
    } catch (error) {
        return rejectWithValue('addArticleComment error')
    }
})
