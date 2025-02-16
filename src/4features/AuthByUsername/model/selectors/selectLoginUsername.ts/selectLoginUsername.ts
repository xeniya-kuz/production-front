import { type StateSchema } from '@/1app/providers/StoreProvider'
import { buildSelector } from '@/6shared/lib/store'

export const [useLoginUsername, selectLoginUsername] = buildSelector((state: StateSchema): string => state.loginForm?.username ?? '')
