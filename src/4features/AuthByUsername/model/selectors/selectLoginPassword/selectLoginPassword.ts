import { type StateSchema } from '1app/providers/StoreProvider'

export const selectLoginPassword = (state: StateSchema): string => state.loginForm?.password ?? ''
