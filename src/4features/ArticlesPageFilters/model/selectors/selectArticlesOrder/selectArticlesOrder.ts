import { type StateSchema } from '@/1app/providers/StoreProvider'
import { type SortOrder } from '@/6shared/types/sort'

export const selectArticlesOrder = (state: StateSchema): SortOrder => state.articlesPageFilters?.order ?? 'asc'
