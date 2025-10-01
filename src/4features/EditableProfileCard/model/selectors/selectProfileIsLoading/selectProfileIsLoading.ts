import { type StateSchema } from '@/1app/providers/StoreProvider'

export const selectProfileIsLoading = (
    state: StateSchema,
): boolean | undefined => state.profile?.isLoading
