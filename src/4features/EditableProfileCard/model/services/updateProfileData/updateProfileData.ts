import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '1app/providers/StoreProvider'
import { selectEditedProfile } from '../../selectors'
import { ValidateProfileError } from '../../const/validate'
import { validateProfileData } from '../validateProfileData/validateProfileData'
import { type Profile } from '5entities/Profile'

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
      const response = await extra.api.put<Profile>(`/profile/${profile?.id}`, profile)

      if (response.data === undefined) {
        throw new Error()
      }

      return response.data
    } catch (error) {
      return rejectWithValue([ValidateProfileError.SERVER])
    }
  })
