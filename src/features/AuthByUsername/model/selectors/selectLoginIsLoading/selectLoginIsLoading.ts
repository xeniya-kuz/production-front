import { type StateSchema } from '@/app/providers/StoreProvider'
import { buildSelector } from '@/shared/lib/store'

export const [useLoginIsLoading, selectLoginIsLoading] = buildSelector(
    (state: StateSchema): boolean => state.loginForm?.isLoading ?? false,
)
