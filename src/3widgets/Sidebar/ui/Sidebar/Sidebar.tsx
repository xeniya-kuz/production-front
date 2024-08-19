import { LangSwitcher } from '4features/LangSwitcher'
import { ThemeSwitcher } from '4features/ThemeSwitcher'
import { classNames } from '6shared/lib/classNames/classNames'
import { Button, ButtonSize, ButtonTheme } from '6shared/ui/Button/Button'
import { memo, useState } from 'react'
import { sidebarItemList } from '../../module/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import styles from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(
  function Sidebar ({ className }: SidebarProps): JSX.Element {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onToggle = (): void => {
      setCollapsed((prev) => !prev)
    }

    return (
        <div
          data-testid='sidebar'
          className={classNames(styles.sidebar, [className], {
            [styles.collapsed]: collapsed
          })}
        >
            <Button
              data-testid='sidebar-toggle'
              className={styles.collapseBtn}
              square size={ButtonSize.L}
              theme={ButtonTheme.BACKGROUND_INVERTED}
              onClick={onToggle}
              >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                {sidebarItemList.map((item) => (
                    <SidebarItem
                      key={item.path}
                      item={item}
                      collapsed={collapsed}
                    />
                ))}
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} short={collapsed}/>
            </div>
        </div>
    )
  })
