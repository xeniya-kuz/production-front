import { type StateSchema } from '@/app/providers/StoreProvider'

export const selectArticlesHasMore = (
    state: StateSchema,
): boolean | undefined => state.articleInfiniteList?.hasMore
