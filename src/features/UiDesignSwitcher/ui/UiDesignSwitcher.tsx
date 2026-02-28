import { selectUserAuthData } from '@/entities/User'
import {
    getFeatureFlag,
    toggleFeatures,
    ToggleFeatures,
    updateFeatureFlag,
} from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { ListBox as ListBoxRedesigned } from '@/shared/ui/redesigned/Popups'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { type JSX, memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

export const UiDesignSwitcher = memo(function UiDesignSwitcher(): JSX.Element {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const isAppRedesigned = getFeatureFlag('isAppRedesigned')
    const authData = useSelector(selectUserAuthData)
    const [isLoading, setIsLoading] = useState(false)

    const options = [
        { value: 'new', label: t('ui-new') },
        { value: 'old', label: t('ui-old') },
    ]

    const onChange = useCallback(
        async ({ value }: { value: 'new' | 'old' }) => {
            if (authData) {
                setIsLoading(true)
                await dispatch(
                    updateFeatureFlag({
                        newFeatures: { isAppRedesigned: value === 'new' },
                        userId: authData.id,
                    }),
                ).unwrap()
                setIsLoading(false)
            }
        },
        [dispatch, authData],
    )

    const ListBox = (props: any): JSX.Element => (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBoxRedesigned {...props} />}
            off={<ListBoxDeprecated {...props} />}
        />
    )

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    })

    return isLoading ? (
        <Skeleton
            width={250}
            height={32}
        />
    ) : (
        <ListBox
            value={isAppRedesigned ? 'new' : 'old'}
            options={options}
            onChange={onChange}
            label={t('ui-variant')}
        />
    )
})
