import { type StateSchema } from '@/app/providers/StoreProvider'
import { ArticleSortField } from '@/entities/Article'

export const selectArticlesSort = (state: StateSchema): ArticleSortField =>
    state.articlesPageFilters?.sort ?? ArticleSortField.CREATED
