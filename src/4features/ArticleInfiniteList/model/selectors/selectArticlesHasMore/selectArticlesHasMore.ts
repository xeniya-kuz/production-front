import { type StateSchema } from '@/1app/providers/StoreProvider'

export const selectArticlesHasMore = (state: StateSchema): boolean | undefined => state.articleInfiniteList?.hasMore
