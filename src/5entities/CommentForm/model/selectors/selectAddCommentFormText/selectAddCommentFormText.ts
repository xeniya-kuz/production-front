import { type StateSchema } from '@/1app/providers/StoreProvider'

export const selectAddArticleCommentFormText = (
    state: StateSchema,
): string | undefined => state.commentForm?.comment ?? ''
