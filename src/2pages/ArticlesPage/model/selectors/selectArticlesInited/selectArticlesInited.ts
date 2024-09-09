import { type StateSchema } from '1app/providers/StoreProvider'

export const selectArticlesInited = (state: StateSchema): boolean | undefined => state.articlesPage?._inited
