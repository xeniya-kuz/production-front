import { ToggleFeatures } from '@/shared/lib/features'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { type JSX, memo } from 'react'

interface NotificationSkeletonsProps {
    isMobile?: boolean
}

export const NotificationSkeletons = memo(function NotificationSkeleton({
    isMobile = false,
}: NotificationSkeletonsProps): JSX.Element {
    return (
        <>
            {new Array(3).fill(0).map((_, index) => (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Card padding="16">
                            <Skeleton
                                width={isMobile ? '100%' : '250px'}
                                height="80px"
                                border="8px"
                            />
                        </Card>
                    }
                    off={
                        <SkeletonDeprecated
                            width={isMobile ? '100%' : '250px'}
                            height="80px"
                            border="8px"
                        />
                    }
                    key={index}
                />
            ))}
        </>
    )
})
