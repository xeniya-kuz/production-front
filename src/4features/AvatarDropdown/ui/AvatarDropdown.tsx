import { type JSX, memo, useCallback } from 'react'
import { Dropdown } from '@/6shared/ui/Popups'
import { Avatar } from '@/6shared/ui/Avatar/Avatar'
import { routePaths } from '@/6shared/config/routeConfig/routeConfig'
import { useSelector } from 'react-redux'
import { isUserAdmin, isUserManager, selectUserAuthData, userActions } from '@/5entities/User'
import { useAppDispatch } from '@/6shared/lib/hooks'
import { useTranslation } from 'react-i18next'

interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = memo(function AvatarDropdown
({ className }: AvatarDropdownProps): JSX.Element | null {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const authData = useSelector(selectUserAuthData)
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const isAdminPanelAvailabal = isAdmin || isManager

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const dropdownItems = [
    ...(isAdminPanelAvailabal
      ? [{
          content: t('profile:admin-panel'),
          href: `${routePaths['admin-panel']}`
        }]
      : []),
    {
      content: t('profile:profile'),
      href: `${routePaths.profile}/${authData?.id}`
    },
    {
      content: t('Выйти'),
      onClick: onLogout
    }
  ]

  if (authData === undefined) {
    return null
  }

  return (
      <Dropdown
          className={className}
          direction='bottom left'
          trigger={
              <Avatar
                  alt='avatar'
                  size={30}
                  src={authData.avatar}
                  />
                }
          items={dropdownItems}
          />
  )
})
