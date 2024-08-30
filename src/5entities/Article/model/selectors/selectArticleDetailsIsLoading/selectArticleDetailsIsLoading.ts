import { type StateSchema } from '1app/providers/StoreProvider'

export const selectArticleDetailsIsLoading = (state: StateSchema): boolean | undefined => state.articleDetails?.isLoading
