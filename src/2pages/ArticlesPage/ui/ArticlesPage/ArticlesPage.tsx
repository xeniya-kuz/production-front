import {
    ArticleInfiniteList,
    articleInfiniteListActions,
    fetchArticlesList,
} from '@/4features/ArticleInfiniteList'
import {
    ArticlesPageFilters,
    selectArticlesView,
} from '@/4features/ArticlesPageFilters'
import { type JSX, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import styles from './ArticlesPage.module.scss'
import { useAppDispatch } from '@/6shared/lib/hooks'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { Page } from '@/3widgets/Page'

const ArticlesPage = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const view = useSelector(selectArticlesView)

    const fetchData = useCallback((): void => {
        dispatch(articleInfiniteListActions.setPage(1))
        void dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const Header = (): JSX.Element => (
        <ArticlesPageFilters
            className={styles.header}
            fetchData={fetchData}
        />
    )

    return (
        <Page data-testid={DATA_TEST_ID.articlesPage}>
            <ArticleInfiniteList
                view={view}
                Header={Header}
            />
        </Page>
    )
}

export default memo(ArticlesPage)
