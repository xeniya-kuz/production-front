import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '1app/providers/StoreProvider'
import { type Profile } from '5entities/Profile'

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const response = await extra.api.get<Profile>('/profile')
      console.log('response', response)

      if (response.data === undefined) {
        throw new Error()
      }

      return response.data
    } catch (error) {
      return rejectWithValue('fetch profile error')
    }
  })
