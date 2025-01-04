import { LangSwitcher } from '4features/LangSwitcher'
import { ThemeSwitcher } from '4features/ThemeSwitcher'
import { classNames } from '6shared/lib/classNames/classNames'
import { Button, ButtonSize, ButtonTheme } from '6shared/ui/Button/Button'
import { memo, useMemo, useState } from 'react'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import styles from './Sidebar.module.scss'
import { useSelector } from 'react-redux'
import { selectSidebarItems } from '../../module/selectors/selectSidebarItems/selectSidebarItems'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(
  function Sidebar ({ className }: SidebarProps): JSX.Element {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const sidebarItemList = useSelector(selectSidebarItems)

    const onToggle = (): void => {
      setCollapsed((prev) => !prev)
    }

    const itemsList = useMemo(() => sidebarItemList.map((item) => (
        <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
        />
    )), [collapsed, sidebarItemList])

    return (
        <aside
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
            <nav>
                <ul className={styles.items}>
                    {itemsList}
                </ul>
            </nav>
            <ul className={styles.switchers}>
                <li className={styles.li}>
                    <ThemeSwitcher />
                </li>
                <li className={styles.li}>
                    <LangSwitcher className={styles.lang} short={collapsed}/>
                </li>
            </ul>
        </aside>
    )
  })
