import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './PageLoader.module.scss'
import { Loader } from '@/6shared/ui/deprecated/Loader'
import { type JSX, memo } from 'react'
import { ToggleFeatures } from '@/6shared/lib/features'
import { AppLoaderLayout } from '@/6shared/layouts/AppLoaderLayout'
import { selectUserMounted } from '@/5entities/User'
import { useSelector } from 'react-redux'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = memo(function PageLoader({
    className,
}: PageLoaderProps): JSX.Element {
    const isMounted = useSelector(selectUserMounted)

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<AppLoaderLayout withSidebar={!isMounted} />}
            off={
                <div className={classNames(styles.pageLoader, [className])}>
                    <Loader />
                </div>
            }
        />
    )
})
