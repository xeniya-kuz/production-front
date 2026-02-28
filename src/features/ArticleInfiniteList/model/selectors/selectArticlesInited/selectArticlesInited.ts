import { type StateSchema } from '@/app/providers/StoreProvider'

export const selectArticlesInited = (state: StateSchema): boolean | undefined =>
    state.articleInfiniteList?._inited
