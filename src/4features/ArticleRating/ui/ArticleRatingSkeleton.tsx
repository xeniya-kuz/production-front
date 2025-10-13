import { Skeleton } from '@/6shared/ui/deprecated/Skeleton'
import { type JSX, memo } from 'react'

export const ArticleRatingSkeleton = memo(
    function ArticleRatingSkeleton(): JSX.Element {
        return (
            <Skeleton
                width={'100%'}
                height={120}
            />
        )
    },
)
