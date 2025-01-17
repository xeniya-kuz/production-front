import { type StateSchema } from '@/1app/providers/StoreProvider'

export const selectArticlesLimit = (state: StateSchema): number | undefined => state.articleInfiniteList?.limit
