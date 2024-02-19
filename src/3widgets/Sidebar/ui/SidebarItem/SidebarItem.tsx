import { classNames } from '6shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '6shared/ui/AppLink/AppLink'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type SidebarItemType } from '../../module/items'
import styles from './SidebarItem.module.scss'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(
  function SidebarItem ({ item, collapsed }: SidebarItemProps): JSX.Element {
    const { t } = useTranslation()

    return (
        <div className={styles.sidebaritem}>
            <AppLink
                theme={AppLinkTheme.INVERTED}
                to={item?.path}
                className={classNames(styles.item, [], {
                  [styles.collapsed]: collapsed
                })}
              >
                <item.Icon className={styles.icon}/>
                <span className={styles.link}> {t(item.text)}</span>
            </AppLink>
        </div>
    )
  })
