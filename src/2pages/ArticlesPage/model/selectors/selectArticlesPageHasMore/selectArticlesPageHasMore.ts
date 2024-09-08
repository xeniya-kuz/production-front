import { type StateSchema } from '1app/providers/StoreProvider'

export const selectArticlesPageHasMore = (state: StateSchema): boolean | undefined => state.articlesPage?.hasMore
