import { type StateSchema } from '@/1app/providers/StoreProvider'
import { buildSelector } from '@/6shared/lib/store'
import { selectArticleComments } from '../../slice/articleCommentsSlice'

export const [useComments, selectComments] = buildSelector(
    selectArticleComments.selectAll,
)

export const [useArticleCommentsIsLoading, selectArticleCommentsIsLoading] =
    buildSelector(
        (state: StateSchema): boolean | undefined =>
            state.articleComments?.isLoading,
    )

export const [useArticleCommentsError, selectArticleCommentsError] =
    buildSelector(
        (state: StateSchema): string | undefined =>
            state.articleComments?.error,
    )
