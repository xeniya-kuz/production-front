import { NotificationList } from '@/5entities/Notification'
import NotificationIconDeprecated from '@/6shared/assets/icons/notification-20-20.svg'
import NotificationIcon from '@/6shared/assets/icons/notification.svg'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/6shared/lib/features'
import { Drawer } from '@/6shared/ui/deprecated/Drawer/Drawer'
import {
    Icon as IconDeprecated,
    IconColors,
} from '@/6shared/ui/deprecated/Icon/Icon'
import { Popover as PopoverDeprecated } from '@/6shared/ui/deprecated/Popups'
import { Icon } from '@/6shared/ui/redesigned/Icon'
import { Popover } from '@/6shared/ui/redesigned/Popups'
import { type JSX, memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo(function NotificationButton({
    className,
}: NotificationButtonProps): JSX.Element {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev)
    }, [setIsOpen])

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<Icon Svg={NotificationIcon} />}
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
                    <NotificationList />
                </Drawer>
            </MobileView>
        </>
    )
})
