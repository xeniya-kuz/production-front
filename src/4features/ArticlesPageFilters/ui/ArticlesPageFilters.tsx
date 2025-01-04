import { classNames } from '6shared/lib/classNames/classNames'
import styles from './ArticlesPageFilters.module.scss'
import { memo, useCallback, useMemo } from 'react'
import { ViewSwitcher } from '4features/ViewSwitcher'
import { useSelector } from 'react-redux'
import { type ArticleSortField, type ArticleView, ArticleType } from '5entities/Article'
import { useAppDispatch, useDebounce, useInitialEffect } from '6shared/lib/hooks'
import { useTranslation } from 'react-i18next'
import { Card } from '6shared/ui/Card/Card'
import { Input } from '6shared/ui/Input/Input'
import { ArticleSortDropdown } from '4features/ArticleSortDropdown'
import { type TabItem, Tabs } from '6shared/ui/Tabs/Tabs'
import { type SortOrder } from '6shared/types/order'
import { selectArticlesView } from '../model/selectors/selectArticlesView/selectArticlesView'
import { selectArticlesSort } from '../model/selectors/selectArticlesSort/selectArticlesSort'
import { selectArticlesSearch } from '../model/selectors/selectArticlesSearch/selectArticlesSearch'
import { selectArticlesOrder } from '../model/selectors/selectArticlesOrder/selectArticlesOrder'
import { selectArticlesType } from '../model/selectors/selectArticlesType/selectArticlesType'
import { articlesPageFiltersActions, articlesPageFiltersReducer } from '../model/slice/articlesPageFiltersSlice'
import { DynamicModuleLoader, type ReducerList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlesPageActions } from '2pages/ArticlesPage/model/slice/articlesPageSlice'
import { fetchArticlesList } from '2pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'

interface ArticlesPageFiltersProps {
  className?: string
}

const initialReducer: ReducerList = {
  articlesPageFilters: articlesPageFiltersReducer
}

export const ArticlesPageFilters = memo(function ArticlesPageFilters
({ className }: ArticlesPageFiltersProps): JSX.Element {
  const view = useSelector(selectArticlesView)
  const dispatch = useAppDispatch()
  const { t } = useTranslation(['filters', 'articles'])
  const sort = useSelector(selectArticlesSort)
  const order = useSelector(selectArticlesOrder)
  const search = useSelector(selectArticlesSearch)
  const type = useSelector(selectArticlesType)

  const typesTabs = useMemo<Array<TabItem<ArticleType>>>(() => [
    { label: t('articles:all'), value: ArticleType.ALL },
    { label: t('articles:economics'), value: ArticleType.ECONOMICS },
    { label: t('articles:science'), value: ArticleType.SCIENCE },
    { label: t('articles:it'), value: ArticleType.IT }
  ], [t])

  useInitialEffect(() => {
    void dispatch(articlesPageFiltersActions.initState())
  })

  const fetchData = useCallback((): void => {
    dispatch(articlesPageActions.setPage(1))
    void dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onViewChange = useCallback((view: ArticleView) => {
    dispatch(articlesPageFiltersActions.setView(view))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeOrder = useCallback(({ value }: { value: SortOrder }) => {
    dispatch(articlesPageFiltersActions.setOrder(value))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSort = useCallback(({ value }: { value: ArticleSortField }) => {
    dispatch(articlesPageFiltersActions.setSort(value))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSearch = useCallback(({ value }: { value: string }) => {
    dispatch(articlesPageFiltersActions.setSearch(value))
    debouncedFetchData()
  }, [dispatch, debouncedFetchData])

  const onChangeType = useCallback((tab: TabItem<ArticleType>) => {
    dispatch(articlesPageFiltersActions.setType(tab.value))
    debouncedFetchData()
  }, [dispatch, debouncedFetchData])

  return (
      <DynamicModuleLoader reducers={initialReducer} removeAfterUnmount={false}>
          <div className={classNames(styles.articlesPageFilters, [className])}>
              <div className={styles.sortWrapper}>
                  <ArticleSortDropdown
                      sort={sort}
                      order={order}
                      onChangeOrder={onChangeOrder}
                      onChangeSort={onChangeSort}
              />
                  <ViewSwitcher view={view} onViewChange={onViewChange}/>
              </div>
              <Card className={styles.search}>
                  <Input placeholder={t('search')} onChange={onChangeSearch} value={search}/>
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
