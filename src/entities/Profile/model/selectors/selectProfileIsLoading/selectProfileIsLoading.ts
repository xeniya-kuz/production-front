import { type StateSchema } from '@/app/providers/StoreProvider'

export const selectProfileIsLoading = (
    state: StateSchema,
): boolean | undefined => state.profile?.isLoading
