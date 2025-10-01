import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/1app/providers/StoreProvider'
import { selectUserAuthData } from '@/5entities/User'
import { selectArticleDetails } from '@/5entities/Article'
import { type Comment } from '@/5entities/Comment'

export const addArticleComment = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('articleComments/addArticleComment', async (comment, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const user = selectUserAuthData(getState())
    const article = selectArticleDetails(getState())

    if (user === undefined || article === undefined) {
        return rejectWithValue('no data')
    }

    try {
        const response = await extra.api.post<Comment>('/comments', {
            articleId: article.id,
            userId: user.id,
            text: comment,
        })

        if (response.data === undefined) {
            throw new Error()
        }

        return { ...response.data, user }
    } catch (error) {
        return rejectWithValue('addArticleComment error')
    }
})
