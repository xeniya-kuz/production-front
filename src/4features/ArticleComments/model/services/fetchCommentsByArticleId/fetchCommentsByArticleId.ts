import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/1app/providers/StoreProvider'
import { type Comment } from '@/5entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
>('articleComments/fetchCommentsByArticleId', async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    if (articleId === undefined) {
        return rejectWithValue('no articleId')
    }

    try {
        const response = await extra.api.get<Comment[]>('/comments', {
            params: {
                articleId,
                _expand: 'user',
            },
        })

        if (response.data === undefined) {
            throw new Error()
        }

        return response.data
    } catch (error) {
        return rejectWithValue('fetch comments error')
    }
})
