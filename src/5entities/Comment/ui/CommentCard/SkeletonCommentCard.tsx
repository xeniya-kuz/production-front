import { Skeleton } from '@/6shared/ui/deprecated/Skeleton/Skeleton'
import { HStack, VStack } from '@/6shared/ui/deprecated/Stack'
import { type JSX, memo } from 'react'

interface SkeletonCommentCardProps {
    classNameHeader?: string
    classNameUsername?: string
}

export const SkeletonCommentCard = memo(function SkeletonCommentCard({
    classNameHeader,
    classNameUsername,
}: SkeletonCommentCardProps): JSX.Element {
    return (
        <VStack
            gap="16"
            max
        >
            <HStack
                gap="4"
                className={classNameHeader}
            >
                <Skeleton
                    border="50%"
                    width={30}
                    height={30}
                />
                <Skeleton
                    width={150}
                    height={20}
                    className={classNameUsername}
                />
            </HStack>
            <VStack
                gap="8"
                max
            >
                <Skeleton
                    width={'100%'}
                    height={16}
                />
                <Skeleton
                    width={'70%'}
                    height={16}
                />
            </VStack>
        </VStack>
    )
})
