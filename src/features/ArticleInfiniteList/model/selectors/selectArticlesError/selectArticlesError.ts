import { type StateSchema } from '@/app/providers/StoreProvider'

export const selectArticlesError = (state: StateSchema): string | undefined =>
    state.articleInfiniteList?.error
