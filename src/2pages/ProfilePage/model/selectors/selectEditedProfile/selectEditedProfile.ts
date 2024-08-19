import { type StateSchema } from '1app/providers/StoreProvider'
import { type ProfileSchema } from '../../types/profile'

export const selectEditedProfile = (state: StateSchema): ProfileSchema['editedProfile'] | undefined => state.profile?.editedProfile
