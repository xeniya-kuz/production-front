import { TestAsyncThunk } from '@/6shared/lib/tests/TestAsyncThunk'
import { userMock } from '../const/mocks'
import { initAuthData } from '../services/initAuthData'
import { type UserSchema } from '../types/user'
import { userActions, userReducer } from './userSlice'

describe('userSlice', () => {
    test('setAuthData', async () => {
        const state: DeepPartial<UserSchema> = { _mounted: false }

        expect(
            userReducer(state as UserSchema, userActions.setAuthData(userMock)),
        ).toEqual({ authData: userMock, _mounted: false })
    })

    test('logout', async () => {
        const state: DeepPartial<UserSchema> = {
            _mounted: true,
            authData: userMock,
        }

        expect(userReducer(state as UserSchema, userActions.logout())).toEqual({
            _mounted: true,
            authData: undefined,
        })
    })
})
