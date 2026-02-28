import { type StateSchema } from '@/app/providers/StoreProvider'

export const selectUserMounted = (state: StateSchema): boolean =>
    state.user._mounted
