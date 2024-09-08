import { type StateSchema } from '1app/providers/StoreProvider'

export const selectArticlesPageNum = (state: StateSchema): number => state.articlesPage?.page ?? 1
