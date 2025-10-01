import { type Article } from '@/5entities/Article'
import { type EntityState } from '@reduxjs/toolkit'

export interface ArticleInfiniteListSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string

    // pagination
    page: number
    limit: number
    hasMore: boolean
    _inited: boolean
}
