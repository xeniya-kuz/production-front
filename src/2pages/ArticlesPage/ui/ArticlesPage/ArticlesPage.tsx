import { Page } from '3widgets/Page'
import { ArticleList } from '5entities/Article'
import { classNames } from '6shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducerList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useInitialEffect } from '6shared/lib/hooks'
import { Error } from '6shared/ui/Error/Error'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { selectArticlesError } from '../../model/selectors/selectArticlesError/selectArticlesError'
import { selectArticlesIsLoading } from '../../model/selectors/selectArticlesIsLoading/selectArticlesIsLoading'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { articlesPageActions, articlesPageReducer, selectArticles } from '../../model/slice/articlesPageSlice'
import { ArticlesPageFilters } from '4features/ArticlesPageFilters'
import styles from './ArticlesPage.module.scss'
import { useSearchParams } from 'react-router-dom'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'

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
  // useSearchParams можно заменить new URLSearchParams(window.location.search)
  const [searchParams] = useSearchParams()

  useInitialEffect(() => {
    void dispatch(initArticlesPage(searchParams))
  })

  const onLoadNextArticles = useCallback(() => {
    void dispatch(fetchNextArticlesPage())
  }, [dispatch])

  const fetchData = useCallback((): void => {
    dispatch(articlesPageActions.setPage(1))
    void dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  if (error !== undefined) {
    return (
        <Page className={classNames(styles.articlesPage, [className])}>
            <Error/>
        </Page>
    )
  }

  return (
      <DynamicModuleLoader reducers={initialReducer} removeAfterUnmount={false}>
          <Page
            className={classNames(styles.articlesPage, [className])}
            onScrollEnd={onLoadNextArticles}
          >
              <ArticlesPageFilters fetchData={fetchData}/>
              <ArticleList
                isLoading={isLoading}
                articles={articles}
                className={styles.list}
              />
          </Page>
      </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
