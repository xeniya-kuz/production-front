import { type StateSchema } from '@/app/providers/StoreProvider'

export const selectArticlesSearch = (state: StateSchema): string =>
    state.articlesPageFilters?.search ?? ''
