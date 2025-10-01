import { type StateSchema } from '@/1app/providers/StoreProvider'

export const selectArticlesError = (state: StateSchema): string | undefined =>
    state.articleInfiniteList?.error
