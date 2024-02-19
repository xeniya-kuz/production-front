import { userActions, type User } from '5entities/User'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from '6shared/const/localstorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'user/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData)

      if (response.data === undefined) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))

      thunkAPI.dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('auth error')
    }
  })
