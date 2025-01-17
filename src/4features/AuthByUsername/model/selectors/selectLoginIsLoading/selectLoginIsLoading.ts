import { type StateSchema } from '@/1app/providers/StoreProvider'

export const selectLoginIsLoading = (state: StateSchema): boolean => state.loginForm?.isLoading ?? false
