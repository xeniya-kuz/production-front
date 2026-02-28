import { type StateSchema } from '@/app/providers/StoreProvider'

export const selectArticlesIsLoading = (
    state: StateSchema,
): boolean | undefined => state.articleInfiniteList?.isLoading
