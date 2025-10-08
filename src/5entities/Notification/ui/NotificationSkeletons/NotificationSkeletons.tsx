import { ToggleFeatures } from '@/6shared/lib/features'
import { Skeleton as SkeletonDeprecated } from '@/6shared/ui/deprecated/Skeleton/Skeleton'
import { Skeleton } from '@/6shared/ui/redesigned/Skeleton'
import { type JSX, memo } from 'react'

export const NotificationSkeletons = memo(
    function NotificationSkeleton(): JSX.Element {
        return (
            <>
                {new Array(3).fill(0).map((_, index) => (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <Skeleton
                                width="250px"
                                height="80px"
                                border="8px"
                            />
                        }
                        off={
                            <SkeletonDeprecated
                                width="250px"
                                height="80px"
                                border="8px"
                            />
                        }
                        key={index}
                    />
                ))}
            </>
        )
    },
)
