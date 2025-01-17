import { type StateSchema } from '@/1app/providers/StoreProvider'

export const selectUserMounted = (state: StateSchema): boolean => state.user._mounted
