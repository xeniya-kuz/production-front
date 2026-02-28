import { type StateSchema } from '@/app/providers/StoreProvider'

export const selectArticleDetailsIsLoading = (
    state: StateSchema,
): boolean | undefined => state.articleDetails?.isLoading
