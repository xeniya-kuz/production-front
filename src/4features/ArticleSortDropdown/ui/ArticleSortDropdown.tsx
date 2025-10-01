import { ArticleSortField } from '@/5entities/Article'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { type SortOrder } from '@/6shared/types/sort'
import { ListBox, type ListBoxOption } from '@/6shared/ui/Popups'
import { type JSX, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './ArticleSortDropdown.module.scss'

interface ArticleSortDropdownProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeSort: ({ value }: { value: ArticleSortField }) => void
    onChangeOrder: ({ value }: { value: SortOrder }) => void
}

export const ArticleSortDropdown = memo(function ArticleSortDropdown({
    className,
    sort,
    onChangeSort,
    order,
    onChangeOrder,
}: ArticleSortDropdownProps): JSX.Element {
    const { t } = useTranslation('filters')

    const orderOptions = useMemo<ListBoxOption[]>(
        () => [
            {
                value: 'asc',
                label: t('asc'),
            },
            {
                value: 'desc',
                label: t('desc'),
            },
        ],
        [t],
    )

    const sortFieldOptions = useMemo<ListBoxOption[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                label: t('creation-date'),
            },
            {
                value: ArticleSortField.TITLE,
                label: t('title'),
            },
            {
                value: ArticleSortField.VIEWS,
                label: t('views'),
            },
        ],
        [t],
    )

    return (
        <div className={classNames(styles.articleSortDropdown, [className])}>
            <ListBox
                label={t('sort-by')}
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <ListBox
                label={t('sort-by')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    )
})
