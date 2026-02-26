import { Page } from '@/3widgets/Page'
import {
    ArticleInfiniteList,
    articleInfiniteListActions,
    fetchArticlesList,
    fetchNextArticlesPage,
} from '@/4features/ArticleInfiniteList'
// TODO: fix
// eslint-disable-next-line fsd-path-checker-sia355/public-api-imports
// import { articleInfiniteListActions } from '@/4features/ArticleInfiniteList/model/slice/articleInfiniteListSlice'
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

interface ArticlesPageProps {
    // для скриншотных тестов
    virtualized?: boolean
}

const ArticlesPage = ({
    virtualized = true,
}: ArticlesPageProps): JSX.Element => {
    const dispatch = useAppDispatch()

    const fetchData = useCallback((): void => {
        dispatch(articleInfiniteListActions.setPage(1))
        void dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const Header = (): JSX.Element => (
        <ArticlesFiltersDeprecated fetchData={fetchData} />
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
                            onScrollEnd={() => {
                                void dispatch(fetchNextArticlesPage())
                            }}
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
                    onScrollEnd={
                        virtualized
                            ? undefined
                            : () => {
                                  void dispatch(fetchNextArticlesPage())
                              }
                    }
                >
                    <ArticlePageGreeting />
                    <ArticleInfiniteList
                        Header={Header}
                        virtualized={virtualized}
                    />
                </Page>
            }
        />
    )
}

export default memo(ArticlesPage)
