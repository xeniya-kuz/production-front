import { Skeleton } from '@/6shared/ui/Skeleton/Skeleton'
import { type JSX, memo } from 'react'

export const NotificationSkeletons = memo(
    function NotificationSkeleton(): JSX.Element {
        return (
            <>
                {new Array(3).fill(0).map((_, index) => (
                    <Skeleton
                        width="250px"
                        height="80px"
                        border="8px"
                        key={index}
                    />
                ))}
            </>
        )
    },
)
