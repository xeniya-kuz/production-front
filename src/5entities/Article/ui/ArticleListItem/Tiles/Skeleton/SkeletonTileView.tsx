import { Skeleton as SkeletonDeprecated } from '@/6shared/ui/deprecated/Skeleton/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/6shared/ui/redesigned/Skeleton'
import { memo, type JSX } from 'react'
import styles from '../styles.module.scss'

import { toggleFeatures } from '@/6shared/lib/features'

export const SkeletonTileView = memo(function SkeletonTileView(): JSX.Element {
    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    })

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
