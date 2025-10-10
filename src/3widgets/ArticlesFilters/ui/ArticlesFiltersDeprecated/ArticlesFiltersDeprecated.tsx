import { ArticleSortDropdown } from '@/4features/ArticleSortDropdown'
import { ViewSwitcher } from '@/4features/ViewSwitcher'
import { classNames } from '@/6shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducerList,
} from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Card } from '@/6shared/ui/deprecated/Card/Card'
import { Input } from '@/6shared/ui/deprecated/Input/Input'
import { Tabs } from '@/6shared/ui/deprecated/Tabs/Tabs'
import { type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { articlesFiltersReducer } from '../../model/slice/articlesPageFiltersSlice'
import styles from './ArticlesFiltersDeprecated.module.scss'
import { useArticleFilters } from '../../lib/hooks/useArticlesFilters'

interface ArticlesFiltersDeprecatedProps {
    className?: string
    fetchData: () => void
}

const initialReducer: ReducerList = {
    articlesPageFilters: articlesFiltersReducer,
}

/**
 * Устарел, используем новый компонент ArticlesFilters
 * @deprecated
 */
export const ArticlesFiltersDeprecated = memo(function ArticlesPageFilters({
    className,
    fetchData,
}: ArticlesFiltersDeprecatedProps): JSX.Element {
    const { t } = useTranslation('filters')

    const {
        sort,
        order,
        search,
        type,
        typesTabs,
        onChangeOrder,
        onChangeSort,
        onChangeSearch,
        onChangeType,
    } = useArticleFilters({ fetchData })

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
                    <ViewSwitcher fetchData={fetchData} />
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
