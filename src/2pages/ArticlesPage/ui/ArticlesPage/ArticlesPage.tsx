import { ArticleList, type ArticleView } from '5entities/Article'
import { classNames } from '6shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useInitialEffect } from '6shared/lib/hooks'
import { Error } from '6shared/ui/Error/Error'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { selectArticlesError } from '../../model/selectors/selectArticlesError/selectArticlesError'
import { selectArticlesIsLoading } from '../../model/selectors/selectArticlesIsLoading/selectArticlesIsLoading'
import { selectArticlesView } from '../../model/selectors/selectArticlesView/selectArticlesView'
import { articlesPageActions, articlesPageReducer, selectArticles } from '../../model/slice/articlesPageSlice'
import styles from './ArticlesPage.module.scss'
import { ViewSwitcher } from '4features/ArticlesViewSwitcher'
import { Page } from '6shared/ui/Page/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'

interface ArticlesPageProps {
  className?: string
}

const initialReducer: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = ({ className }: ArticlesPageProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const articles = useSelector(selectArticles.selectAll)
  const view = useSelector(selectArticlesView)
  const isLoading = useSelector(selectArticlesIsLoading)
  const error = useSelector(selectArticlesError)

  useInitialEffect(() => {
    void dispatch(initArticlesPage())
  })

  const onViewChange = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  const onLoadNextArticles = useCallback(() => {
    void dispatch(fetchNextArticlesPage())
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
              <ViewSwitcher view={view} onViewChange={onViewChange}/>
              <ArticleList
                view={view}
                isLoading={isLoading}
                articles={articles}
              />
          </Page>
      </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
