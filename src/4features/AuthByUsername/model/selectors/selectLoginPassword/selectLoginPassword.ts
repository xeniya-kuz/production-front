import { type StateSchema } from '@/1app/providers/StoreProvider'
import { buildSelector } from '@/6shared/lib/store'

export const [useLoginPassword, selectLoginPassword] = buildSelector((state: StateSchema): string => state.loginForm?.password ?? '')
