import { type StateSchema } from '@/1app/providers/StoreProvider'
import { buildSelector } from '@/6shared/lib/store'

export const [useLoginError, selectLoginError] = buildSelector((state: StateSchema): string | undefined => state.loginForm?.error)
