import { ArticleList, DEFAULT_ARTICLE_VIEW } from '@/entities/Article'
import {
    DynamicModuleLoader,
    type ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks'
import { type FC, memo, useCallback, type JSX } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { selectArticlesIsLoading } from '../model/selectors/selectArticlesIsLoading/selectArticlesIsLoading'
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { init } from '../model/services/initArticlesPage/initArticlesPage'
import {
    articleInfiniteListReducer,
    selectArticles,
} from '../model/slice/articleInfiniteListSlice'
import { useJsonSettings } from '@/entities/User'

interface AddArticleCommentFormProps {
    Header?: FC
    virtualized?: boolean
}

const initialReducer: ReducerList = {
    articleInfiniteList: articleInfiniteListReducer,
}

export const ArticleInfiniteList = memo(function AddArticleCommentForm({
    Header,
    virtualized = true,
}: AddArticleCommentFormProps): JSX.Element {
    const dispatch = useAppDispatch()

    const { articlesView: view = DEFAULT_ARTICLE_VIEW } = useJsonSettings()
    const articles = useSelector(selectArticles.selectAll)
    const isLoading = useSelector(selectArticlesIsLoading)

    // useSearchParams можно заменить new URLSearchParams(window.location.search)
    const [searchParams] = useSearchParams()

    useInitialEffect(() => {
        void dispatch(init({ searchParams, view }))
    })

    const onLoadNextArticles = useCallback(() => {
        void dispatch(fetchNextArticlesPage())
    }, [dispatch])

    return (
        <DynamicModuleLoader
            reducers={initialReducer}
            removeAfterUnmount={false}
        >
            <ArticleList
                isLoading={isLoading}
                articles={articles}
                onLoadNextArticles={onLoadNextArticles}
                view={view}
                Header={Header}
                virtualized={virtualized}
            />
        </DynamicModuleLoader>
    )
})
