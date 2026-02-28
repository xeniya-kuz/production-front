import { type StateSchema } from '@/app/providers/StoreProvider'

export const selectAddArticleCommentFormIsLoading = (
    state: StateSchema,
): boolean | undefined => state.commentForm?.isLoading
