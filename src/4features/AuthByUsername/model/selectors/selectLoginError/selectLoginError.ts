import { type StateSchema } from '1app/providers/StoreProvider'

export const selectLoginError = (state: StateSchema): string | undefined => state.loginForm?.error
