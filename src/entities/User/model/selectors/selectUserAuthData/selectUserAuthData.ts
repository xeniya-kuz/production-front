import { type StateSchema } from '@/app/providers/StoreProvider'
import { type User } from '../../types/user'

export const selectUserAuthData = (state: StateSchema): User | undefined =>
    state.user?.authData
