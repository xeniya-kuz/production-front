import { type StateSchema } from '@/app/providers/StoreProvider'

export const selectAddArticleCommentFormError = (
    state: StateSchema,
): string | undefined => state.commentForm?.error
