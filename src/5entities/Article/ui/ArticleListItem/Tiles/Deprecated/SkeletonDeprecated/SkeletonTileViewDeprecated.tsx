import { Skeleton } from '@/6shared/ui/deprecated/Skeleton'
import { memo, type JSX } from 'react'
import styles from '../TileViewDeprecated/TileViewDeprecated.module.scss'
import { Card } from '@/6shared/ui/deprecated/Card'

/**
 * Устарел, используем новый компонент из папки TileView
 * @deprecated
 */
export const SkeletonTileViewDeprecated = memo(
    function SkeletonTileView(): JSX.Element {
        return (
            <Card>
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
            </Card>
        )
    },
)
