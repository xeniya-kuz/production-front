import { userMock } from '@/6shared/const/mocks/user'
import { type UserSchema } from '../types/user'
import { userActions, userReducer } from './userSlice'

describe('userSlice', () => {
  test('setAuthData', async () => {
    const state: DeepPartial<UserSchema> = { _mounted: false }

    expect(userReducer(
      state as UserSchema,
      userActions.setAuthData(userMock)
    )).toEqual({ authData: userMock, _mounted: false })
  })

  test('initAuthData', async () => {
    const state: DeepPartial<UserSchema> = { _mounted: false }

    expect(userReducer(
      state as UserSchema,
      userActions.initAuthData()
    )).toEqual({
      _mounted: true
    })
  })

  test('logout', async () => {
    const state: DeepPartial<UserSchema> = { _mounted: true, authData: userMock }

    expect(userReducer(
      state as UserSchema,
      userActions.logout()
    )).toEqual({
      _mounted: true,
      authData: undefined
    })
  })
})
