import { selectUserAuthData } from '@/5entities/User'
import {
    getFeatureFlag,
    toggleFeatures,
    ToggleFeatures,
    updateFeatureFlag,
} from '@/6shared/lib/features'
import { useAppDispatch } from '@/6shared/lib/hooks'
import { ListBox as ListBoxDeprecated } from '@/6shared/ui/deprecated/Popups'
import { Skeleton as SkeletonDeprecated } from '@/6shared/ui/deprecated/Skeleton'
import { ListBox as ListBoxRedesigned } from '@/6shared/ui/redesigned/Popups'
import { Skeleton as SkeletonRedesigned } from '@/6shared/ui/redesigned/Skeleton'
import { type JSX, memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'

export const UiDesignSwitcher = memo(function UiDesignSwitcher(): JSX.Element {
    const dispatch = useAppDispatch()
    const isAppRedesigned = getFeatureFlag('isAppRedesigned')
    const authData = useSelector(selectUserAuthData)
    const [isLoading, setIsLoading] = useState(false)

    // TODO: translate
    const options = [
        { value: 'new', label: 'Новый' },
        { value: 'old', label: 'Старый' },
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
            label="Вариант интерфейса"
        />
    )
})
