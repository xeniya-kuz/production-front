import { type StateSchema } from '@/1app/providers/StoreProvider'
import { type ProfileSchema } from '../../types/profile'

export const selectProfileData = (
    state: StateSchema,
): ProfileSchema['profile'] | undefined => state.profile?.profile
