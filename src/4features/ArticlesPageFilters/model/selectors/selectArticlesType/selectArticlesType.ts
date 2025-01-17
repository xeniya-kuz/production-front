import { type StateSchema } from '@/1app/providers/StoreProvider'
import { ArticleType } from '@/5entities/Article'

export const selectArticlesType = (state: StateSchema): ArticleType => state.articlesPageFilters?.type ?? ArticleType.ALL
