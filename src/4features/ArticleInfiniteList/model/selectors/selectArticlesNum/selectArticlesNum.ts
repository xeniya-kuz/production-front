import { type StateSchema } from '1app/providers/StoreProvider'

export const selectArticlesNum = (state: StateSchema): number => state.articleInfiniteList?.page ?? 1
