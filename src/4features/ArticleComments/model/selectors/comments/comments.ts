import { type StateSchema } from '1app/providers/StoreProvider'

export const selectArticleCommentsIsLoading = (state: StateSchema): boolean | undefined => state.articleComments?.isLoading

export const selectArticleCommentsError = (state: StateSchema): string | undefined => state.articleComments?.error
