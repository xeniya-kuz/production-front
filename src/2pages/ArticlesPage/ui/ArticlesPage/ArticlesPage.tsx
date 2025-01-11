import { ArticleInfiniteList, articleInfiniteListActions, fetchArticlesList } from '4features/ArticleInfiniteList'
import { ArticlesPageFilters, selectArticlesView } from '4features/ArticlesPageFilters'
import { type JSX, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import styles from './ArticlesPage.module.scss'
import { useAppDispatch } from '6shared/lib/hooks'

const ArticlesPage = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const view = useSelector(selectArticlesView)

  const fetchData = useCallback((): void => {
    dispatch(articleInfiniteListActions.setPage(1))
    void dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const Header = (): JSX.Element => <ArticlesPageFilters className={styles.header} fetchData={fetchData}/>

  return (
      <ArticleInfiniteList view={view} Header={Header}/>
  )
}

export default memo(ArticlesPage)
