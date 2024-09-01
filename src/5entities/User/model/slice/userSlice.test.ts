import { type UserSchema } from '../types/user'
import { userActions, userReducer } from './userSlice'

const user = {
  id: '1',
  username: 'foo',
  avatar: ''
}

describe('userSlice', () => {
  test('setAuthData', async () => {
    const state: DeepPartial<UserSchema> = { _mounted: false }

    expect(userReducer(
      state as UserSchema,
      userActions.setAuthData(user)
    )).toEqual({ authData: user, _mounted: false })
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
    const state: DeepPartial<UserSchema> = { _mounted: true, authData: user }

    expect(userReducer(
      state as UserSchema,
      userActions.logout()
    )).toEqual({
      _mounted: true,
      authData: undefined
    })
  })
})
