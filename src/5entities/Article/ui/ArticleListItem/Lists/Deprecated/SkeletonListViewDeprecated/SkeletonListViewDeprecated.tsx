import { Skeleton } from '@/6shared/ui/deprecated/Skeleton/Skeleton'
import styles from '../ListViewDeprecated/ListViewDeprecated.module.scss'
import { type JSX, memo } from 'react'
import { classNames } from '@/6shared/lib/classNames/classNames'

import { HStack } from '@/6shared/ui/redesigned/Stack'
import { Card } from '@/6shared/ui/deprecated/Card'

/**
 * Устарел, используем новый компонент SkeletonListView
 * @deprecated
 */
export const SkeletonListViewDeprecated = memo(
    function SkeletonListView(): JSX.Element {
        return (
            <Card className={styles.card}>
                <HStack align="center">
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
                </HStack>

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
            </Card>
        )
    },
)
