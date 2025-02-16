import { type StateSchema } from '@/1app/providers/StoreProvider'
import { ArticleView } from '@/5entities/Article'

export const selectArticlesView = (state: StateSchema): ArticleView => state.articlesPageFilters?.view ?? ArticleView.TILE
