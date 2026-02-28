import { Page } from '@/widgets/Page'
import {
    ArticleInfiniteList,
    articleInfiniteListActions,
    fetchArticlesList,
    fetchNextArticlesPage,
} from '@/features/ArticleInfiniteList'
// TODO: fix
// eslint-disable-next-line fsd-path-checker-sia355/public-api-imports
// import { articleInfiniteListActions } from '@/features/ArticleInfiniteList/model/slice/articleInfiniteListSlice'
import { ArticlePageGreeting } from '@/features/AticlePageGreeting'
import { DATA_TEST_ID } from '@/shared/const/tests'
import { useAppDispatch } from '@/shared/lib/hooks'
import { type JSX, memo, useCallback } from 'react'
import styles from './ArticlesPage.module.scss'
import { ToggleFeatures } from '@/shared/lib/features'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { ViewSwitcher } from '@/features/ViewSwitcher'
import {
    ArticlesFiltersDeprecated,
    ArticlesFilters,
} from '@/widgets/ArticlesFilters'

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
