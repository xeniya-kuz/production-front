import { type StateSchema } from '1app/providers/StoreProvider'

export const selectArticlesPageLimit = (state: StateSchema): number | undefined => state.articlesPage?.limit
