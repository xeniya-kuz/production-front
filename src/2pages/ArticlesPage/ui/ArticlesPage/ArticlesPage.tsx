import { Page } from '@/3widgets/Page'
import {
    ArticleInfiniteList,
    articleInfiniteListActions,
    fetchArticlesList,
} from '@/4features/ArticleInfiniteList'
import { ArticlePageGreeting } from '@/4features/AticlePageGreeting'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { useAppDispatch } from '@/6shared/lib/hooks'
import { type JSX, memo, useCallback } from 'react'
import styles from './ArticlesPage.module.scss'
import { ToggleFeatures } from '@/6shared/lib/features'
import { StickyContentLayout } from '@/6shared/layouts/StickyContentLayout'
import { ViewSwitcher } from '@/4features/ViewSwitcher'
import {
    ArticlesFiltersDeprecated,
    ArticlesFilters,
} from '@/3widgets/ArticlesFilters'

const ArticlesPage = (): JSX.Element => {
    const dispatch = useAppDispatch()

    const fetchData = useCallback((): void => {
        dispatch(articleInfiniteListActions.setPage(1))
        void dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const Header = (): JSX.Element => (
        <ArticlesFiltersDeprecated
            className={styles.header}
            fetchData={fetchData}
        />
    )

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <StickyContentLayout
                    content={
                        <Page
                            data-testid={DATA_TEST_ID.articlesPage}
                            className={styles.pageRedesigned}
                        >
                            <ArticlePageGreeting />
                            <ArticleInfiniteList />
                        </Page>
                    }
                    left={<ViewSwitcher fetchData={fetchData} />}
                    right={<ArticlesFilters fetchData={fetchData} />}
                />
            }
            off={
                <Page
                    data-testid={DATA_TEST_ID.articlesPage}
                    className={styles.page}
                >
                    <ArticlePageGreeting />
                    <ArticleInfiniteList Header={Header} />
                </Page>
            }
        />
    )
}

export default memo(ArticlesPage)
