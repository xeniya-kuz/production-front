import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './styles.module.scss'
import { type JSX, memo } from 'react'
import { Card } from '@/6shared/ui/redesigned/Card'
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack'
import { Skeleton } from '@/6shared/ui/redesigned/Skeleton'

interface ProfileCardSkeletonProps {
    className?: string
}

export const ProfileCardSkeleton = memo(function ProfileCardSkeleton({
    className,
}: ProfileCardSkeletonProps): JSX.Element {
    return (
        <Card
            className={classNames(styles.profileCard, [className])}
            padding="24"
        >
            <VStack gap="32">
                <HStack
                    justify="center"
                    max
                >
                    <Skeleton
                        height={128}
                        width={128}
                        border="50%"
                    />
                </HStack>

                <HStack
                    gap="24"
                    max
                    align="start"
                >
                    <VStack
                        gap="16"
                        max
                    >
                        <Skeleton
                            width="100%"
                            height="38px"
                            border="38px"
                        />

                        <Skeleton
                            width="100%"
                            height="38px"
                            border="38px"
                        />

                        <Skeleton
                            width="100%"
                            height="38px"
                            border="38px"
                        />

                        <Skeleton
                            width="100%"
                            height="38px"
                            border="38px"
                        />
                    </VStack>
                    <VStack
                        gap="16"
                        max
                    >
                        <Skeleton
                            width="100%"
                            height="38px"
                            border="38px"
                        />

                        <Skeleton
                            width="100%"
                            height="38px"
                            border="38px"
                        />

                        <Skeleton
                            width="100%"
                            height="38px"
                            border="38px"
                        />

                        <Skeleton
                            width="100%"
                            height="38px"
                            border="38px"
                        />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    )
})
