import { NotificationList } from '@/5entities/Notification'
import NotificationIcon from '@/6shared/assets/icons/notification-20-20.svg'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { Drawer } from '@/6shared/ui/Drawer/Drawer'
import { Icon, IconColors } from '@/6shared/ui/Icon/Icon'
import { Popover } from '@/6shared/ui/Popups'
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
        <div onClick={toggleOpen}>
            <Icon
                Svg={NotificationIcon}
                color={IconColors.INVERTED_PRIMARY_FILL}
            />
        </div>
    )

    return (
        <>
            <BrowserView>
                <Popover
                    className={classNames(className)}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList />
                </Popover>
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
