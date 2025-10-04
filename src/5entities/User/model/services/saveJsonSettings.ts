import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/1app/providers/StoreProvider'
import { type JsonSettings } from '../types/jsonSettings'
import { getJsonSettings } from '../selectors/jsonSettings'
import { setJsonSettingsMutation } from '../../api/userApi'
import { selectUserAuthData } from '../selectors/selectUserAuthData/selectUserAuthData'

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, getState, dispatch } = thunkApi
    const userData = selectUserAuthData(getState())
    const currentSettings = getJsonSettings(getState())

    if (!userData) {
        return rejectWithValue('No user data')
    }

    try {
        const response = await dispatch(
            setJsonSettingsMutation({
                userId: userData.id,
                jsonSettings: {
                    ...currentSettings,
                    ...newJsonSettings,
                },
            }),
        ).unwrap()

        if (!response.jsonSettings) {
            return rejectWithValue('No json settings')
        }

        return response.jsonSettings
    } catch (e) {
        console.log(e)
        return rejectWithValue('')
    }
})
