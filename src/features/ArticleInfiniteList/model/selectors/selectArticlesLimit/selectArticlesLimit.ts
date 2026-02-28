import { type StateSchema } from '@/app/providers/StoreProvider'

export const selectArticlesLimit = (state: StateSchema): number | undefined =>
    state.articleInfiniteList?.limit
