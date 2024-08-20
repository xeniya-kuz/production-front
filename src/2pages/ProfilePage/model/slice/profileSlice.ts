import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ValidateProfileError, type ProfileSchema } from '../types'
import { fetchProfileData, updateProfileData } from '../services'
import { type Profile } from '5entities/Profile'

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  error: undefined,
  profile: undefined,
  editedProfile: undefined,
  validateErrors: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    cancelEdit: (state) => {
      state.readonly = true
      state.validateErrors = undefined
      state.editedProfile = state.profile
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.editedProfile = { ...state.editedProfile, ...action.payload }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.profile = action.payload
        state.editedProfile = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(updateProfileData.pending, (state) => {
        state.validateErrors = undefined
        state.isLoading = true
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.profile = action.payload
        state.editedProfile = action.payload
        state.readonly = true
      })
      .addCase(updateProfileData.rejected, (state, action: PayloadAction<ValidateProfileError[] | undefined>) => {
        state.isLoading = false
        state.validateErrors = action.payload
      })
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
