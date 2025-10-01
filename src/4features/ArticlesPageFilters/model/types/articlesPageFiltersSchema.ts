import {
    type ArticleView,
    type ArticleSortField,
    type ArticleType,
} from '@/5entities/Article'
import { type SortOrder } from '@/6shared/types/sort'

export interface ArticlesPageFiltersSchema {
    view: ArticleView
    order: SortOrder
    sort: ArticleSortField
    search: string
    type: ArticleType
}
