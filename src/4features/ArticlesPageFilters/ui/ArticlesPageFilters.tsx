/* eslint-disable fsd-path-checker-sia355/layer-imports */
import { ArticleSortDropdown } from '@/4features/ArticleSortDropdown'
import { ViewSwitcher } from '@/4features/ViewSwitcher'
import {
    type ArticleSortField,
    ArticleType,
    type ArticleView,
    DEFAULT_ARTICLE_VIEW,
} from '@/5entities/Article'
import { saveJsonSettings, useJsonSettings } from '@/5entities/User'
import { classNames } from '@/6shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducerList,
} from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useDebounce } from '@/6shared/lib/hooks'
import { type SortOrder } from '@/6shared/types/sort'
import { Card } from '@/6shared/ui/deprecated/Card/Card'
import { Input } from '@/6shared/ui/deprecated/Input/Input'
import { type TabItem, Tabs } from '@/6shared/ui/deprecated/Tabs/Tabs'
import { type JSX, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { selectArticlesOrder } from '../model/selectors/selectArticlesOrder/selectArticlesOrder'
import { selectArticlesSearch } from '../model/selectors/selectArticlesSearch/selectArticlesSearch'
import { selectArticlesSort } from '../model/selectors/selectArticlesSort/selectArticlesSort'
import { selectArticlesType } from '../model/selectors/selectArticlesType/selectArticlesType'
import {
    articlesPageFiltersActions,
    articlesPageFiltersReducer,
} from '../model/slice/articlesPageFiltersSlice'
import styles from './ArticlesPageFilters.module.scss'

interface ArticlesPageFiltersProps {
    className?: string
    fetchData: () => void
}

const initialReducer: ReducerList = {
    articlesPageFilters: articlesPageFiltersReducer,
}

export const ArticlesPageFilters = memo(function ArticlesPageFilters({
    className,
    fetchData,
}: ArticlesPageFiltersProps): JSX.Element {
    const dispatch = useAppDispatch()
    const { articlesView: view = DEFAULT_ARTICLE_VIEW } = useJsonSettings()
    const { t } = useTranslation(['filters', 'articles'])
    const sort = useSelector(selectArticlesSort)
    const order = useSelector(selectArticlesOrder)
    const search = useSelector(selectArticlesSearch)
    const type = useSelector(selectArticlesType)

    const typesTabs = useMemo<Array<TabItem<ArticleType>>>(
        () => [
            { label: t('articles:all'), value: ArticleType.ALL },
            { label: t('articles:economics'), value: ArticleType.ECONOMICS },
            { label: t('articles:science'), value: ArticleType.SCIENCE },
            { label: t('articles:it'), value: ArticleType.IT },
        ],
        [t],
    )

    const debouncedFetchData = useDebounce(fetchData, 500)

    const onViewChange = useCallback(
        (view: ArticleView) => {
            void dispatch(saveJsonSettings({ articlesView: view })).then(() => {
                fetchData()
            })
        },
        [dispatch, fetchData],
    )

    const onChangeOrder = useCallback(
        ({ value }: { value: SortOrder }) => {
            dispatch(articlesPageFiltersActions.setOrder(value))
            fetchData()
        },
        [dispatch, fetchData],
    )

    const onChangeSort = useCallback(
        ({ value }: { value: ArticleSortField }) => {
            dispatch(articlesPageFiltersActions.setSort(value))
            fetchData()
        },
        [dispatch, fetchData],
    )

    const onChangeSearch = useCallback(
        ({ value }: { value: string }) => {
            dispatch(articlesPageFiltersActions.setSearch(value))
            debouncedFetchData()
        },
        [dispatch, debouncedFetchData],
    )

    const onChangeType = useCallback(
        (tab: TabItem<ArticleType>) => {
            dispatch(articlesPageFiltersActions.setType(tab.value))
            debouncedFetchData()
        },
        [dispatch, debouncedFetchData],
    )

    return (
        <DynamicModuleLoader
            reducers={initialReducer}
            removeAfterUnmount={false}
        >
            <div
                className={classNames(styles.articlesPageFilters, [className])}
            >
                <div className={styles.sortWrapper}>
                    <ArticleSortDropdown
                        sort={sort}
                        order={order}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                    <ViewSwitcher
                        view={view}
                        onViewChange={onViewChange}
                    />
                </div>
                <Card className={styles.search}>
                    <Input
                        placeholder={t('search')}
                        onChange={onChangeSearch}
                        value={search}
                    />
                </Card>
                <Tabs
                    tabs={typesTabs}
                    activeTab={type}
                    setActiveTab={onChangeType}
                    className={styles.tabs}
                />
            </div>
        </DynamicModuleLoader>
    )
})
