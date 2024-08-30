import { type StateSchema } from '1app/providers/StoreProvider'

export const selectArticleDetailsError = (state: StateSchema): string | undefined => state.articleDetails?.error
