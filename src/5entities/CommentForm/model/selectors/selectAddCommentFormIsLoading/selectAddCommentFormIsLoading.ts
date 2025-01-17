import { type StateSchema } from '@/1app/providers/StoreProvider'

export const selectAddArticleCommentFormIsLoading = (state: StateSchema): boolean | undefined => state.commentForm?.isLoading
