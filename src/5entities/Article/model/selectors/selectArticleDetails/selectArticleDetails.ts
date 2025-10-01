import { type StateSchema } from '@/1app/providers/StoreProvider'
import { type Article } from '../../types/article'

export const selectArticleDetails = (state: StateSchema): Article | undefined =>
    state.articleDetails?.article
