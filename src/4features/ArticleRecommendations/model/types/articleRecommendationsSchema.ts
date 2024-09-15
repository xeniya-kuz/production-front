import { type Article } from '5entities/Article'
import { type EntityState } from '@reduxjs/toolkit'

export interface ArticleRecommendationsSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string
}
