import { Skeleton } from '@/6shared/ui/Skeleton/Skeleton'
import styles from '../styles.module.scss'
import { memo, type JSX } from 'react'

export const SkeletonTileView = memo(function SkeletonTileView(): JSX.Element {
    return (
        <>
            <div className={styles.imageWrapper}>
                <Skeleton
                    width={200}
                    height={200}
                    className={styles.img}
                />
            </div>
            <div className={styles.infoWrapper}>
                <Skeleton
                    width={130}
                    height={16}
                />
            </div>
            <Skeleton
                width={150}
                height={16}
                className={styles.title}
            />
        </>
    )
})
