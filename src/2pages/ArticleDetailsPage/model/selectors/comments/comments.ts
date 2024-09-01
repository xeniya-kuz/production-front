import { type StateSchema } from '1app/providers/StoreProvider'

export const selectArticleCommentsIsLoading = (state: StateSchema): boolean | undefined => state.articleDetailsComments?.isLoading

export const selectArticleCommentsError = (state: StateSchema): string | undefined => state.articleDetailsComments?.error
