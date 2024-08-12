import { createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData'

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  error: undefined,
  profile: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.isLoading = false
        state.profile = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        if (action.payload !== undefined) {
          state.error = action.payload
        }
      })
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
