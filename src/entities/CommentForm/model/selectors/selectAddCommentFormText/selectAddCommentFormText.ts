import { type StateSchema } from '@/app/providers/StoreProvider'

export const selectAddArticleCommentFormText = (
    state: StateSchema,
): string | undefined => state.commentForm?.comment ?? ''
