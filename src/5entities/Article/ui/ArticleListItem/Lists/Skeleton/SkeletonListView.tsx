import { Skeleton as SkeletonDeprecated } from '@/6shared/ui/deprecated/Skeleton/Skeleton'
import stylesRedesigned from '../ListView/ListView.module.scss'
import stylesDeprecated from '../ListViewDeprecated/ListViewDeprecated.module.scss'
import { type JSX, memo } from 'react'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { Skeleton as SkeletonRedesigned } from '@/6shared/ui/redesigned/Skeleton'

import { toggleFeatures } from '@/6shared/lib/features'

export const SkeletonListView = memo(function SkeletonListView(): JSX.Element {
    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    })

    const styles = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => stylesRedesigned,
        off: () => stylesDeprecated,
    })

    return (
        <div className={styles.skeleton}>
            <div className={styles.header}>
                <Skeleton
                    width={30}
                    height={30}
                    border="50%"
                />
                <Skeleton
                    width={150}
                    height={16}
                    className={styles.username}
                />
                <Skeleton
                    width={150}
                    height={16}
                    className={styles.date}
                />
            </div>
            <Skeleton
                width={250}
                height={24}
                className={styles.title}
            />
            <Skeleton
                height={200}
                className={styles.img}
            />
            <Skeleton
                height={16}
                className={classNames(styles.textBlock)}
            />
            <Skeleton
                height={16}
                className={classNames(styles.textBlock)}
            />
            <Skeleton
                height={16}
                className={classNames(styles.textBlock)}
            />
            <div className={styles.footer}>
                <Skeleton
                    width={200}
                    height={36}
                />
            </div>
        </div>
    )
})
