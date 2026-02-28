import { type StateSchema } from '@/app/providers/StoreProvider'

export const selectProfileReadonly = (
    state: StateSchema,
): boolean | undefined => state.profile?.readonly
