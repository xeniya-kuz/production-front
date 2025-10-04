import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type User, type UserSchema } from '../types/user'
import { USER_LOCALSTORAGE_KEY } from '@/6shared/const/localstorage'
import { setFeatureFlags } from '@/6shared/lib/features'
import { saveJsonSettings } from '../services/saveJsonSettings'
import { type JsonSettings } from '../types/jsonSettings'

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
        initAuthData: (state) => {
            const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if (userData !== null) {
                const json = JSON.parse(userData) as User
                state.authData = json
                setFeatureFlags(json.features)
            }
            state._mounted = true
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)

            state.authData = undefined
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, { payload }: PayloadAction<JsonSettings>) => {
                if (state.authData) {
                    state.authData.jsonSettings = payload
                }
            },
        )
    },
})

export const { actions: userActions, reducer: userReducer } = userSlice
