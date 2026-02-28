import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './PageLoader.module.scss'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { type JSX, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout'
import { selectUserMounted } from '@/entities/User'
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
