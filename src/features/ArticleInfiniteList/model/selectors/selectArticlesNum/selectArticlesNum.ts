import { type StateSchema } from '@/app/providers/StoreProvider'

export const selectArticlesNum = (state: StateSchema): number =>
    state.articleInfiniteList?.page ?? 1
