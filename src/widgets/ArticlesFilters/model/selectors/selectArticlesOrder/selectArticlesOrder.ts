import { type StateSchema } from '@/app/providers/StoreProvider'
import { type SortOrder } from '@/shared/types/sort'

export const selectArticlesOrder = (state: StateSchema): SortOrder =>
    state.articlesPageFilters?.order ?? 'asc'
