import { useAppDispatch, useDebounce } from '@/6shared/lib/hooks'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { selectArticlesSort } from '../../selectors/selectArticlesSort/selectArticlesSort'
import { selectArticlesOrder } from '../../selectors/selectArticlesOrder/selectArticlesOrder'
import { selectArticlesSearch } from '../../selectors/selectArticlesSearch/selectArticlesSearch'
import { selectArticlesType } from '../../selectors/selectArticlesType/selectArticlesType'
import { type TabItem } from '@/6shared/ui/deprecated/Tabs'
import { type ArticleSortField, ArticleType } from '@/5entities/Article'
import { articlesFiltersActions } from '../../model/slice/articlesPageFiltersSlice'
import { type SortOrder } from '@/6shared/types/sort'

interface ArticleFiltersParams {
    fetchData: () => void
}

export const useArticleFilters = ({ fetchData }: ArticleFiltersParams) => {
    const dispatch = useAppDispatch()
    const { t } = useTranslation('filters')
    const sort = useSelector(selectArticlesSort)
    const order = useSelector(selectArticlesOrder)
    const search = useSelector(selectArticlesSearch)
    const type = useSelector(selectArticlesType)

    const typesTabs = useMemo<Array<TabItem<ArticleType>>>(
        () => [
            { label: t('all'), value: ArticleType.ALL },
            { label: t('economics'), value: ArticleType.ECONOMICS },
            { label: t('science'), value: ArticleType.SCIENCE },
            { label: t('it'), value: ArticleType.IT },
        ],
        [t],
    )

    const debouncedFetchData = useDebounce(fetchData, 500)

    const onChangeOrder = useCallback(
        ({ value }: { value: SortOrder }) => {
            dispatch(articlesFiltersActions.setOrder(value))
            fetchData()
        },
        [dispatch, fetchData],
    )

    const onChangeSort = useCallback(
        ({ value }: { value: ArticleSortField }) => {
            dispatch(articlesFiltersActions.setSort(value))
            fetchData()
        },
        [dispatch, fetchData],
    )

    const onChangeSearch = useCallback(
        ({ value }: { value: string }) => {
            dispatch(articlesFiltersActions.setSearch(value))
            debouncedFetchData()
        },
        [dispatch, debouncedFetchData],
    )

    const onChangeType = useCallback(
        (tab: TabItem<ArticleType>) => {
            dispatch(articlesFiltersActions.setType(tab.value))
            debouncedFetchData()
        },
        [dispatch, debouncedFetchData],
    )

    return {
        sort,
        order,
        search,
        type,
        typesTabs,
        onChangeOrder,
        onChangeSort,
        onChangeSearch,
        onChangeType,
    }
}
