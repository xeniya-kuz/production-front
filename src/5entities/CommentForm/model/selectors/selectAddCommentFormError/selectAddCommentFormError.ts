import { type StateSchema } from '@/1app/providers/StoreProvider'

export const selectAddArticleCommentFormError = (
    state: StateSchema,
): string | undefined => state.commentForm?.error
