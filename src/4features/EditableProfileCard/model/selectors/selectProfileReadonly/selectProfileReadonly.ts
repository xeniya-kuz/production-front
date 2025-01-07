import { type StateSchema } from '1app/providers/StoreProvider'

export const selectProfileReadonly = (state: StateSchema): boolean | undefined => state.profile?.readonly
