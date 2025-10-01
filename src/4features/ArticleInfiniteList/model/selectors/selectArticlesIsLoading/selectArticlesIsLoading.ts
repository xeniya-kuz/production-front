import { type StateSchema } from '@/1app/providers/StoreProvider'

export const selectArticlesIsLoading = (
    state: StateSchema,
): boolean | undefined => state.articleInfiniteList?.isLoading
