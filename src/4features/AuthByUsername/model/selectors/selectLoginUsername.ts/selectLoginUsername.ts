import { type StateSchema } from '1app/providers/StoreProvider'

export const selectLoginUsername = (state: StateSchema): string => state.loginForm?.username ?? ''
