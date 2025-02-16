import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/1app/providers/StoreProvider'
import { type Profile } from '@/5entities/Profile'

export const fetchProfileData = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    if (profileId === undefined) {
      return rejectWithValue('no profileId')
    }

    try {
      const response = await extra.api.get<Profile>(`/profile/${profileId}`)

      if (response.data === undefined) {
        throw new Error()
      }

      return response.data
    } catch (error) {
      return rejectWithValue('fetch profile error')
    }
  })
