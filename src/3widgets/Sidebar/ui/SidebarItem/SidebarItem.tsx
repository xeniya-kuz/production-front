import { classNames, type Mods } from '@/6shared/lib/classNames/classNames'
import {
    AppLink as AppLinkDeprecated,
    AppLinkTheme,
} from '@/6shared/ui/deprecated/AppLink/AppLink'
import { type FC, type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './SidebarItem.module.scss'
import { useSelector } from 'react-redux'
import { selectUserAuthData } from '@/5entities/User'
import {
    Icon as IconDeprecated,
    IconColors,
} from '@/6shared/ui/deprecated/Icon/Icon'
import { type SidebarItemType } from '../../module/types/sidebar'
import { ToggleFeatures } from '@/6shared/lib/features'
import { AppLink } from '@/6shared/ui/redesigned/AppLink'
import { Icon } from '@/6shared/ui/redesigned/Icon'

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

    const mods: Mods = {
        [styles.collapsed]: collapsed,
    }

    const Deprecated: FC = () => (
        <li className={styles.sidebarItem}>
            <AppLinkDeprecated
                theme={AppLinkTheme.INVERTED}
                to={item?.path}
                className={classNames(styles.item, [], mods)}
            >
                <IconDeprecated
                    Svg={item.Icon}
                    color={IconColors.INVERTED_PRIMARY_FILL}
                />
                <span className={styles.link}>{t(item.text)}</span>
            </AppLinkDeprecated>
        </li>
    )

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <li className={styles.sidebarItemRedesigned}>
                    <AppLink
                        to={item?.path}
                        className={classNames(styles.item, [], mods)}
                        activeClassName={styles.active}
                    >
                        <Icon Svg={item.Icon} />
                        <span className={styles.link}>{t(item.text)}</span>
                    </AppLink>
                </li>
            }
            off={<Deprecated />}
        />
    )
})
