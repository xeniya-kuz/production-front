import { type StateSchema } from '@/1app/providers/StoreProvider'
import { type ProfileSchema } from '../../types/profile'

export const selectProfileError = (
    state: StateSchema,
): ProfileSchema['error'] | undefined => state.profile?.error
