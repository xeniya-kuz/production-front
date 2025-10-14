import { memo, type JSX } from 'react'
import styles from '../TileView/TileView.module.scss'
import { Card } from '@/6shared/ui/redesigned/Card'
import { Skeleton } from '@/6shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack'

export const SkeletonTileView = memo(function SkeletonTileView(): JSX.Element {
    return (
        <Card
            padding="0"
            className={styles.card}
        >
            <Skeleton
                className={styles.img}
                height={140}
                width="100%"
                border="0"
            />
            <VStack gap="8">
                <VStack
                    className={styles.title}
                    gap="8"
                >
                    <Skeleton height={20} />
                    <Skeleton height={20} />
                    <Skeleton height={20} />
                </VStack>
                <VStack
                    gap="8"
                    max
                >
                    <HStack
                        justify="between"
                        max
                        className={styles.info}
                    >
                        <Skeleton
                            height={16}
                            width={90}
                        />
                        <Skeleton
                            height={16}
                            width={90}
                        />
                    </HStack>
                    <HStack
                        gap="4"
                        className={styles.footer}
                    >
                        <Skeleton
                            height={32}
                            width={32}
                            border="50%"
                        />
                        <Skeleton
                            height={16}
                            width={80}
                        />
                    </HStack>
                </VStack>
            </VStack>
        </Card>
    )
})
