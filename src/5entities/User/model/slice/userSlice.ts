import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type User, type UserSchema } from '../types/user'
import { USER_LOCALSTORAGE_KEY } from '@/6shared/const/localstorage'

const initialState: UserSchema = {
  _mounted: false
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
      if (userData !== null) {
        state.authData = JSON.parse(userData) as User
      }
      state._mounted = true
    },
    logout: (state) => {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)

      state.authData = undefined
    }
  }
})

export const { actions: userActions, reducer: userReducer } = userSlice
