import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type User, type UserSchema } from '../types/user'
import { USER_LOCALSTORAGE_KEY } from '@/6shared/const/localstorage'
import { setFeatureFlags } from '@/6shared/lib/features'
import { saveJsonSettings } from '../services/saveJsonSettings'
import { type JsonSettings } from '../types/jsonSettings'
import { initAuthData } from '../services/initAuthData'

const initialState: UserSchema = {
    _mounted: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
            setFeatureFlags(action.payload.features)
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)

            state.authData = undefined
        },
    },
    extraReducers: ({ addCase }) => {
        addCase(
            saveJsonSettings.fulfilled,
            (state, { payload }: PayloadAction<JsonSettings>) => {
                if (state.authData) {
                    state.authData.jsonSettings = payload
                }
            },
        )
        addCase(initAuthData.rejected, (state) => {
            state._mounted = true
        })
        addCase(
            initAuthData.fulfilled,
            (state, { payload }: PayloadAction<User>) => {
                state.authData = payload
                setFeatureFlags(payload.features)
                state._mounted = true
            },
        )
    },
})

export const { actions: userActions, reducer: userReducer } = userSlice
