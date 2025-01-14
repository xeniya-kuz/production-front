import { NotificationList } from '5entities/Notification'
import NotificationIcon from '6shared/assets/icons/notification-20-20.svg'
import { classNames } from '6shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '6shared/ui/Button/Button'
import { Icon, IconColors } from '6shared/ui/Icon/Icon'
import { Popover } from '6shared/ui/Popups'
import { type JSX, memo } from 'react'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo(function NotificationButton
({ className }: NotificationButtonProps): JSX.Element {
  return (
      <Popover
          className={classNames(className)}
          direction='bottom left'
          trigger={
              <Button theme={ButtonTheme.CLEAR}>
                  <Icon Svg={NotificationIcon} color={IconColors.INVERTED_PRIMARY_FILL}/>
              </Button>
              }>
          <NotificationList/>
      </Popover>

  )
})
