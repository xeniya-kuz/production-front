import { type ThunkConfig } from '@/1app/providers/StoreProvider'
import {
    LOCAL_STORAGE_LAST_DESIGN_KEY,
    USER_LOCALSTORAGE_KEY,
} from '@/6shared/const/localstorage'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserDataByIdQuery } from '../../api/userApi'
import { type User } from '../types/user'

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi
        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY)

        if (!userId) {
            return rejectWithValue('No user id')
        }

        try {
            const response = await dispatch(
                getUserDataByIdQuery(userId),
            ).unwrap()

            localStorage.setItem(
                LOCAL_STORAGE_LAST_DESIGN_KEY,
                response.features?.isAppRedesigned ? 'new' : 'old',
            )

            return response
        } catch (e) {
            console.log(e)
            return rejectWithValue('')
        }
    },
)
