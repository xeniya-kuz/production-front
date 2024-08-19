import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '1app/providers/StoreProvider'
import { type Profile } from '5entities/Profile'
import { selectEditedProfile } from '../../selectors'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const profile = selectEditedProfile(getState())

    try {
      const response = await extra.api.put<Profile>('/profile', profile)

      return response.data
    } catch (error) {
      return rejectWithValue('put profile error')
    }
  })
