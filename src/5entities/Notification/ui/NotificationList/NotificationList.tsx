import { type JSX, memo } from 'react'
import { useNotifications } from '../../api/notificationApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import { NotificationSkeletons } from '../NotificationSkeletons/NotificationSkeletons'
import styles from './NotificationList.module.scss'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { toggleFeatures } from '@/6shared/lib/features'

interface NotificationListProps {
    isMobile?: boolean
}

export const NotificationList = memo(function NotificationList({
    isMobile = false,
}: NotificationListProps): JSX.Element {
    const { isLoading, data: notifications } = useNotifications(null, {
        pollingInterval: 5000,
    })

    if (!notifications?.length && !isLoading) {
        return <p>There is no notifications</p>
    }

    const listStyles = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => styles.notificationListRedesigned,
        off: () => styles.notificationListDeprecated,
    })

    return (
        <div
            className={classNames(listStyles, [], {
                [styles.mobile]: isMobile,
            })}
        >
            {isLoading ? (
                <NotificationSkeletons isMobile={isMobile} />
            ) : (
                notifications?.map((notification) => (
                    <NotificationItem
                        notification={notification}
                        key={notification.id}
                        isMobile={isMobile}
                    />
                ))
            )}
        </div>
    )
})
