import { Skeleton } from '@/6shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack'
import { type JSX, memo } from 'react'
import styles from '../ListView/ListView.module.scss'
import { Card } from '@/6shared/ui/redesigned/Card'

export const SkeletonListView = memo(function SkeletonListView(): JSX.Element {
    return (
        <Card padding="24">
            <VStack gap="16">
                <VStack
                    gap="8"
                    max
                >
                    <HStack gap="8">
                        <Skeleton
                            width={32}
                            height={32}
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
                        height={32}
                        width="100%"
                    />
                </VStack>

                <Skeleton
                    height={24}
                    width={250}
                />

                <Skeleton
                    height={350}
                    width="100%"
                />
                <VStack
                    gap="8"
                    className={styles.textBlock}
                    max
                >
                    <Skeleton height={16} />
                    <Skeleton height={16} />
                    <Skeleton height={16} />
                </VStack>

                <HStack
                    max
                    justify="between"
                >
                    <Skeleton
                        height={32}
                        width={145}
                    />
                    <Skeleton
                        height={32}
                        width={90}
                    />
                </HStack>
            </VStack>
        </Card>
    )
})
