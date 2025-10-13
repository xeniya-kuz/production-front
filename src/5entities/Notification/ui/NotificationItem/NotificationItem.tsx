import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './NotificationItem.module.scss'
import { type JSX, memo } from 'react'
import { type Notification } from '../../model/types/notification'
import { Card as CardDeprecated, CardTheme } from '@/6shared/ui/deprecated/Card'
import { Text as TextDeprecated } from '@/6shared/ui/deprecated/Text'
import { AppLink as AppLinkDeprecated } from '@/6shared/ui/deprecated/AppLink'
import { ToggleFeatures } from '@/6shared/lib/features'
import { AppLink } from '@/6shared/ui/redesigned/AppLink'
import { Text } from '@/6shared/ui/redesigned/Text'
import { Card } from '@/6shared/ui/redesigned/Card'

interface NotificationItemProps {
    className?: string
    notification: Notification
    isMobile?: boolean
}

export const NotificationItem = memo(function NotificationItem({
    className,
    notification,
    isMobile = false,
}: NotificationItemProps): JSX.Element {
    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={classNames(
                        styles.notificationItem,
                        [className, styles.notificationItemRedesigned],
                        { [styles.mobile]: isMobile },
                    )}
                    padding="16"
                    radius="none"
                >
                    <Text
                        title={notification.title}
                        text={notification.description}
                    />
                </Card>
            }
            off={
                <CardDeprecated
                    theme={CardTheme.OUTLINE}
                    className={classNames(
                        styles.notificationItem,
                        [className, styles.notificationItemDeprecated],
                        { [styles.mobile]: isMobile },
                    )}
                >
                    <TextDeprecated
                        title={notification.title}
                        text={notification.description}
                    />
                </CardDeprecated>
            }
        />
    )

    if (notification.href) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <AppLink
                        target="_blank"
                        to={notification.href}
                        className={classNames(
                            styles.notificationItem,
                            [className, styles.notificationItemDeprecated],
                            { [styles.mobile]: isMobile },
                        )}
                    >
                        {content}
                    </AppLink>
                }
                off={
                    <AppLinkDeprecated
                        target="_blank"
                        to={notification.href}
                        className={classNames(
                            styles.notificationItem,
                            [className, styles.notificationItemDeprecated],
                            { [styles.mobile]: isMobile },
                        )}
                    >
                        {content}
                    </AppLinkDeprecated>
                }
            />
        )
    }

    return content
})
