import { createAsyncThunk } from '@reduxjs/toolkit'
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi'
import { type ThunkConfig } from '@/1app/providers/StoreProvider'
import { getAllFeatureFlags } from '../lib/setGetFeatures'
import { type FeatureFlags } from '@/6shared/types/featureFlags'

interface UpdateFeatureFlagOptions {
    userId: string
    newFeatures: Partial<FeatureFlags>
}

export const updateFeatureFlag = createAsyncThunk<
    void,
    UpdateFeatureFlagOptions,
    ThunkConfig<string>
>('features/updateFeatureFlag', async ({ userId, newFeatures }, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi

    try {
        await dispatch(
            updateFeatureFlagsMutation({
                userId,
                features: {
                    ...getAllFeatureFlags(),
                    ...newFeatures,
                },
            }),
        )

        // изначально featureFlag сделали не реактивными
        window.location.reload()
        return undefined
    } catch (e) {
        console.log(e)
        return rejectWithValue('')
    }
})
