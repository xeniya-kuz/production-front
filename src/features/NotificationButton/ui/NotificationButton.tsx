import { NotificationList } from '@/entities/Notification'
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg'
import NotificationIcon from '@/shared/assets/icons/notification.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Drawer } from '@/shared/ui/redesigned/Drawer/Drawer'
import { Icon as IconDeprecated, IconColors } from '@/shared/ui/deprecated/Icon'
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Popover } from '@/shared/ui/redesigned/Popups'
import { type JSX, memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { useTranslation } from 'react-i18next'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo(function NotificationButton({
    className,
}: NotificationButtonProps): JSX.Element {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev)
    }, [setIsOpen])

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon
                    Svg={NotificationIcon}
                    clickable
                    onClick={toggleOpen}
                    title={t('notifications')}
                />
            }
            off={
                <div onClick={toggleOpen}>
                    <IconDeprecated
                        Svg={NotificationIconDeprecated}
                        color={IconColors.INVERTED_PRIMARY_FILL}
                    />
                </div>
            }
        />
    )

    return (
        <>
            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Popover
                            className={classNames(className)}
                            direction="bottom left"
                            trigger={trigger}
                            onTriggerClick={toggleOpen}
                        >
                            <NotificationList />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            className={classNames(className)}
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList />
                        </PopoverDeprecated>
                    }
                />
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer
                    onClose={toggleOpen}
                    isOpen={isOpen}
                >
                    <NotificationList isMobile />
                </Drawer>
            </MobileView>
        </>
    )
})
