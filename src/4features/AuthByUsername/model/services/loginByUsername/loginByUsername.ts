import { userActions, type User } from '@/5entities/User'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    LOCAL_STORAGE_LAST_DESIGN_KEY,
    USER_LOCALSTORAGE_KEY,
} from '@/6shared/const/localstorage'
import { type ThunkConfig } from '@/1app/providers/StoreProvider'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('user/loginByUsername', async (authData, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI

    try {
        const response = await extra.api.post<User>('/login', authData)

        if (!response?.data) {
            throw new Error()
        }

        localStorage.setItem(USER_LOCALSTORAGE_KEY, response.data.id)
        localStorage.setItem(
            LOCAL_STORAGE_LAST_DESIGN_KEY,
            response.data.features?.isAppRedesigned ? 'new' : 'old',
        )
        dispatch(userActions.setAuthData(response.data))

        return response.data
    } catch (error) {
        return rejectWithValue('auth error')
    }
})
