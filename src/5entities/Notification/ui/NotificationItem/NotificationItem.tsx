import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './NotificationItem.module.scss'
import { type JSX, memo } from 'react'
import { type Notification } from '../../model/types/notification'
import { Card, CardTheme } from '@/6shared/ui/Card/Card'
import { Text } from '@/6shared/ui/Text/Text'
import { AppLink } from '@/6shared/ui/AppLink/AppLink'

interface NotificationItemProps {
    className?: string
    notification: Notification
}

export const NotificationItem = memo(function NotificationItem({
    className,
    notification,
}: NotificationItemProps): JSX.Element {
    const content = (
        <Card
            theme={CardTheme.OUTLINE}
            className={classNames(styles.notificationItem, [className])}
        >
            <Text
                title={notification.title}
                text={notification.description}
            />
        </Card>
    )

    if (notification.href) {
        return (
            <AppLink
                target="_blank"
                to={notification.href}
                className={styles.link}
            >
                {content}
            </AppLink>
        )
    }

    return content
})
