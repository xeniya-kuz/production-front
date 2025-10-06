import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './PageLoader.module.scss'
import { Loader } from '@/6shared/ui/deprecated/Loader/Loader'
import { type JSX, memo } from 'react'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = memo(function PageLoader({
    className,
}: PageLoaderProps): JSX.Element {
    return (
        <div className={classNames(styles.pageLoader, [className])}>
            <Loader />
        </div>
    )
})
