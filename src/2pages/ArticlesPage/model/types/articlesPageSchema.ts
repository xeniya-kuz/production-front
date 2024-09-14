import { type ArticleView, type Article, type ArticleSortField, type ArticleType } from '5entities/Article'
import { type SortOrder } from '6shared/types/order'
import { type EntityState } from '@reduxjs/toolkit'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string

  // pagination
  page: number
  limit: number
  hasMore: boolean
  _inited: boolean

}
