import { type StateSchema } from '@/1app/providers/StoreProvider'

export const selectArticlesSearch = (state: StateSchema): string =>
    state.articlesPageFilters?.search ?? ''
