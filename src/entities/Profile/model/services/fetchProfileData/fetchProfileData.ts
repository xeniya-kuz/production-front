import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<
    Profile,
    string | undefined,
    ThunkConfig<string>
>('profile/fetchProfileData', async (profileId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    if (!profileId) {
        return rejectWithValue('no profileId')
    }

    try {
        const response = await extra.api.get<Profile>(`/profile/${profileId}`)

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (error) {
        return rejectWithValue('fetch profile error')
    }
})
