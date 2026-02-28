import { type StateSchema } from '@/app/providers/StoreProvider'
import { ArticleType } from '@/entities/Article'

export const selectArticlesType = (state: StateSchema): ArticleType =>
    state.articlesPageFilters?.type ?? ArticleType.ALL
