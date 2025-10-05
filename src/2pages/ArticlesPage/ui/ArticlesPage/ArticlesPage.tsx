import { Page } from '@/3widgets/Page'
import {
    ArticleInfiniteList,
    articleInfiniteListActions,
    fetchArticlesList,
} from '@/4features/ArticleInfiniteList'
import { ArticlesPageFilters } from '@/4features/ArticlesPageFilters'
import { ArticlePageGreeting } from '@/4features/AticlePageGreeting'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { useAppDispatch } from '@/6shared/lib/hooks'
import { type JSX, memo, useCallback } from 'react'
import styles from './ArticlesPage.module.scss'

const ArticlesPage = (): JSX.Element => {
    const dispatch = useAppDispatch()

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
        <Page
            data-testid={DATA_TEST_ID.articlesPage}
            className={styles.page}
        >
            <ArticlePageGreeting />
            <ArticleInfiniteList Header={Header} />
        </Page>
    )
}

export default memo(ArticlesPage)
