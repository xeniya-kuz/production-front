import { VStack } from '@/6shared/ui/deprecated/Stack'
import { type JSX, memo } from 'react'
import { useNotifications } from '../../api/notificationApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import { NotificationSkeletons } from '../NotificationSkeletons/NotificationSkeletons'

interface NotificationListProps {
    className?: string
}

export const NotificationList = memo(function NotificationList({
    className,
}: NotificationListProps): JSX.Element {
    const { isLoading, data: notifications } = useNotifications(null, {
        pollingInterval: 5000,
    })

    if (!notifications?.length) {
        return <p>There is no notifications</p>
    }

    return (
        <VStack
            gap={'16'}
            max
            className={className}
        >
            {isLoading ? (
                <NotificationSkeletons />
            ) : (
                notifications?.map((notification) => (
                    <NotificationItem
                        notification={notification}
                        key={notification.id}
                    />
                ))
            )}
        </VStack>
    )
})
