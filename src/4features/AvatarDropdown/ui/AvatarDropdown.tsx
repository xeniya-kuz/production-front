import { type FC, type JSX, memo, useCallback } from 'react'
import { Dropdown as DropdownDeprecated } from '@/6shared/ui/deprecated/Popups'
import { Avatar as AvatarDeprecated } from '@/6shared/ui/deprecated/Avatar/Avatar'
import { useSelector } from 'react-redux'
import {
    isUserAdmin,
    isUserManager,
    selectUserAuthData,
    userActions,
} from '@/5entities/User'
import { useAppDispatch } from '@/6shared/lib/hooks'
import { useTranslation } from 'react-i18next'
import { getRouteAdmin, getRouteProfile } from '@/6shared/const/router'
import { ToggleFeatures } from '@/6shared/lib/features'
import { Dropdown } from '@/6shared/ui/redesigned/Popups'
import { Avatar } from '@/6shared/ui/redesigned/Avatar'

interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown = memo(function AvatarDropdown({
    className,
}: AvatarDropdownProps): JSX.Element | null {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const authData = useSelector(selectUserAuthData)
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)
    const isAdminPanelAvailabal = isAdmin || isManager

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (!authData) {
        return null
    }

    const dropdownItems = [
        ...(isAdminPanelAvailabal
            ? [
                  {
                      content: t('profile:admin-panel'),
                      href: getRouteAdmin(),
                  },
              ]
            : []),
        {
            content: t('profile:profile'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Выйти'),
            onClick: onLogout,
        },
    ]

    const Deprecated: FC = () => (
        <DropdownDeprecated
            className={className}
            direction="bottom left"
            trigger={
                <AvatarDeprecated
                    alt="avatar"
                    size={30}
                    src={authData.avatar}
                />
            }
            items={dropdownItems}
        />
    )

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Dropdown
                    className={className}
                    direction="bottom left"
                    trigger={
                        <Avatar
                            alt="avatar"
                            size={40}
                            src={authData.avatar}
                        />
                    }
                    items={dropdownItems}
                />
            }
            off={<Deprecated />}
        />
    )
})
