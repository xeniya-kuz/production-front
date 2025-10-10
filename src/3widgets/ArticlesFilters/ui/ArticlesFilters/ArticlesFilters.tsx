import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './ArticlesFilters.module.scss'
import { type JSX, memo } from 'react'
import { Card } from '@/6shared/ui/redesigned/Card'
import { VStack } from '@/6shared/ui/redesigned/Stack'
import { useTranslation } from 'react-i18next'
import { ArticleSortDropdown } from '@/4features/ArticleSortDropdown'
import { Tabs } from '@/6shared/ui/redesigned/Tabs'
import { useArticleFilters } from '../../lib/hooks/useArticlesFilters'
import {
    DynamicModuleLoader,
    type ReducerList,
} from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlesFiltersReducer } from '../../model/slice/articlesPageFiltersSlice'
import { Input } from '@/6shared/ui/redesigned/Input'
import { Icon } from '@/6shared/ui/redesigned/Icon'
import SearchIcon from '@/6shared/assets/icons/search.svg'

interface ArticlesFiltersProps {
    className?: string
    fetchData: () => void
}

const initialReducer: ReducerList = {
    articlesPageFilters: articlesFiltersReducer,
}

export const ArticlesFilters = memo(function ArticlesFilters({
    className,
    fetchData,
}: ArticlesFiltersProps): JSX.Element {
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
            <Card
                className={classNames(styles.articlesFilters, [className])}
                padding="24"
            >
                <VStack gap="32">
                    <Input
                        placeholder={t('search')}
                        onChange={onChangeSearch}
                        value={search}
                        addonLeft={<Icon Svg={SearchIcon} />}
                    />

                    <Tabs
                        tabs={typesTabs}
                        activeTab={type}
                        setActiveTab={onChangeType}
                        className={styles.tabs}
                        direction="column"
                        size="l"
                    />
                    <ArticleSortDropdown
                        sort={sort}
                        order={order}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                </VStack>
            </Card>
        </DynamicModuleLoader>
    )
})
