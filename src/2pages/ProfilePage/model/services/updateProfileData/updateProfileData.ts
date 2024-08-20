import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '1app/providers/StoreProvider'
import { type Profile } from '5entities/Profile'
import { selectEditedProfile } from '../../selectors'
import { ValidateProfileError } from '../../types'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const profile = selectEditedProfile(getState())
    const errors = validateProfileData(profile)

    if (errors.length > 0) {
      return rejectWithValue(errors)
    }

    try {
      const response = await extra.api.put<Profile>('/profile', profile)

      return response.data
    } catch (error) {
      return rejectWithValue([ValidateProfileError.SERVER])
    }
  })
