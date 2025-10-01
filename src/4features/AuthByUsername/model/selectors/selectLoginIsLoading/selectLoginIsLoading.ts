import { type StateSchema } from '@/1app/providers/StoreProvider'
import { buildSelector } from '@/6shared/lib/store'

export const [useLoginIsLoading, selectLoginIsLoading] = buildSelector(
    (state: StateSchema): boolean => state.loginForm?.isLoading ?? false,
)
