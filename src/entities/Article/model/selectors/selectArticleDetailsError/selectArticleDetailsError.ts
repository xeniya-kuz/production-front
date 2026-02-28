import { type StateSchema } from '@/app/providers/StoreProvider'

export const selectArticleDetailsError = (
    state: StateSchema,
): string | undefined => state.articleDetails?.error
