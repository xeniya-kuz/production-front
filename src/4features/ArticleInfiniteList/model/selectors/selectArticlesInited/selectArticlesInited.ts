import { type StateSchema } from '@/1app/providers/StoreProvider'

export const selectArticlesInited = (state: StateSchema): boolean | undefined => state.articleInfiniteList?._inited
