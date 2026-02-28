import { type ArticleView } from '@/entities/Article'
import { type Theme } from '@/shared/const/themes'

export interface JsonSettings {
    theme?: Theme
    isArticlesPageWasOpened?: boolean
    articlesView?: ArticleView
}
