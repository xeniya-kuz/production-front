import { type ArticleSortField, type ArticleType } from '@/entities/Article'
import { type SortOrder } from '@/shared/types/sort'

export interface ArticlesPageFiltersSchema {
    order: SortOrder
    sort: ArticleSortField
    search: string
    type: ArticleType
}
