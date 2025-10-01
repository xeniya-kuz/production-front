import { userActions, type User } from '@/5entities/User'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { USER_LOCALSTORAGE_KEY } from '@/6shared/const/localstorage'
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

        if (response?.data === undefined) {
            throw new Error()
        }

        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data),
        )

        dispatch(userActions.setAuthData(response.data))

        return response.data
    } catch (error) {
        return rejectWithValue('auth error')
    }
})
