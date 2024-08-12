import { type StateSchema } from '1app/providers/StoreProvider'
import { type Profile } from '../../types/profile'

export const selectProfileData = (state: StateSchema): Profile | undefined => state.profile?.profile
