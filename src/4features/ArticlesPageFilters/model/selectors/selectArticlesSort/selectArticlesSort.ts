import { type StateSchema } from '@/1app/providers/StoreProvider'
import { ArticleSortField } from '@/5entities/Article'

export const selectArticlesSort = (state: StateSchema): ArticleSortField => state.articlesPageFilters?.sort ?? ArticleSortField.CREATED
