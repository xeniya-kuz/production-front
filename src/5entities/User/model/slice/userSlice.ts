import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type User, type UserSchema } from '../types/user'
import { USER_LOCALSTORAGE_KEY } from '6shared/const/localstorage'

const initialState: UserSchema = {

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY)

      state.authData = userData !== null ? JSON.parse(userData) as User : undefined
    },
    logout: (state) => {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)

      state.authData = undefined
    }
  }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
