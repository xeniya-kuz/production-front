import { ArticleList } from '5entities/Article'
import { DynamicModuleLoader, type ReducerList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useInitialEffect } from '6shared/lib/hooks'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { selectArticlesError } from '../../model/selectors/selectArticlesError/selectArticlesError'
import { selectArticlesIsLoading } from '../../model/selectors/selectArticlesIsLoading/selectArticlesIsLoading'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { articlesPageReducer, selectArticles } from '../../model/slice/articlesPageSlice'
import { selectArticlesView } from '4features/ArticlesPageFilters'

interface ArticlesPageProps {
  className?: string
}

const initialReducer: ReducerList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = ({ className }: ArticlesPageProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const articles = useSelector(selectArticles.selectAll)
  const isLoading = useSelector(selectArticlesIsLoading)
  const error = useSelector(selectArticlesError)
  const view = useSelector(selectArticlesView)
  // useSearchParams можно заменить new URLSearchParams(window.location.search)
  const [searchParams] = useSearchParams()

  useInitialEffect(() => {
    void dispatch(initArticlesPage(searchParams))
  })

  const onLoadNextArticles = useCallback(() => {
    void dispatch(fetchNextArticlesPage())
  }, [dispatch])

  return (
      <DynamicModuleLoader reducers={initialReducer} removeAfterUnmount={false}>
          <ArticleList
              isLoading={isLoading}
              articles={articles}
              onLoadNextArticles={onLoadNextArticles}
              className={className}
              view={view}
              />
      </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
