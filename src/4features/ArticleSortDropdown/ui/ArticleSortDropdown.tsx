import { classNames } from '6shared/lib/classNames/classNames'
import { memo, useMemo } from 'react'
import { Dropdown, type Options } from '6shared/ui/Dropdown/Dropdown'
import { useTranslation } from 'react-i18next'
import { ArticleSortField } from '5entities/Article'
import styles from './ArticleSortDropdown.module.scss'
import { type SortOrder } from '6shared/types/order'

interface ArticleSortDropdownProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeSort: ({ value }: { value: ArticleSortField }) => void
  onChangeOrder: ({ value }: { value: SortOrder }) => void
}

export const ArticleSortDropdown = memo(function ArticleSortDropdown
({ className, sort, onChangeSort, order, onChangeOrder }: ArticleSortDropdownProps): JSX.Element {
  const { t } = useTranslation('filters')

  const orderOptions = useMemo<Array<Options<SortOrder>>>(() => [
    {
      value: 'asc',
      label: t('asc')
    },
    {
      value: 'desc',
      label: t('desc')
    }
  ], [t])

  const sortFieldOptions = useMemo<Array<Options<ArticleSortField>>>(() => [
    {
      value: ArticleSortField.CREATED,
      label: t('creation-date')
    },
    {
      value: ArticleSortField.TITLE,
      label: t('title')
    },
    {
      value: ArticleSortField.VIEWS,
      label: t('views')
    }
  ], [t])

  return (
      <div className={classNames(styles.articleSortDropdown, [className])}>
          <Dropdown label={t('sort-by')} options={sortFieldOptions} value={sort} onChange={onChangeSort}/>
          <Dropdown label={t('sort-by')} options={orderOptions} value={order} onChange={onChangeOrder}/>
      </div>
  )
})
