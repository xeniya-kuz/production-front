import { type StateSchema } from '@/app/providers/StoreProvider'
import { buildSelector } from '@/shared/lib/store'

export const [useLoginUsername, selectLoginUsername] = buildSelector(
    (state: StateSchema): string => state.loginForm?.username ?? '',
)
