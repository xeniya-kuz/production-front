import { classNames } from '@/6shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/6shared/ui/AppLink/AppLink'
import { type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './SidebarItem.module.scss'
import { useSelector } from 'react-redux'
import { selectUserAuthData } from '@/5entities/User'
import { Icon, IconColors } from '@/6shared/ui/Icon/Icon'
import { type SidebarItemType } from '../../module/types/sidebar'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo(function SidebarItem({
    item,
    collapsed,
}: SidebarItemProps): JSX.Element | null {
    const { t } = useTranslation()
    const isAuth = Boolean(useSelector(selectUserAuthData))

    if (!isAuth && Boolean(item.isPrivate)) {
        return null
    }

    return (
        <li className={styles.sidebaritem}>
            <AppLink
                theme={AppLinkTheme.INVERTED}
                to={item?.path}
                className={classNames(styles.item, [], {
                    [styles.collapsed]: collapsed,
                })}
            >
                <Icon
                    Svg={item.Icon}
                    color={IconColors.INVERTED_PRIMARY_FILL}
                />
                <span className={styles.link}>{t(item.text)}</span>
            </AppLink>
        </li>
    )
})
