import { LangSwitcher } from '@/4features/LangSwitcher'
import { ThemeSwitcher } from '@/4features/ThemeSwitcher'
import { classNames, type Mods } from '@/6shared/lib/classNames/classNames'
import {
    Button,
    ButtonSize,
    ButtonTheme,
} from '@/6shared/ui/deprecated/Button/Button'
import { type FC, type JSX, memo, useMemo, useState } from 'react'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import styles from './Sidebar.module.scss'
import { useSelector } from 'react-redux'
import { selectSidebarItems } from '../../module/selectors/selectSidebarItems/selectSidebarItems'
import { VStack } from '@/6shared/ui/redesigned/Stack'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { ToggleFeatures } from '@/6shared/lib/features'
import { Logo } from '@/6shared/ui/redesigned/Logo'
import { Icon } from '@/6shared/ui/redesigned/Icon'
import ArrowIcon from '@/6shared/assets/icons/arrow-bottom.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(function Sidebar({
    className,
}: SidebarProps): JSX.Element {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const sidebarItemList = useSelector(selectSidebarItems)

    const onToggle = (): void => {
        setCollapsed((prev) => !prev)
    }

    const itemsList = useMemo(
        () =>
            sidebarItemList.map((item) => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),
        [collapsed, sidebarItemList],
    )

    const mods: Mods = {
        [styles.collapsed]: collapsed,
    }

    const Deprecated: FC = () => (
        <aside
            data-testid={DATA_TEST_ID.sidebar}
            className={classNames(styles.sidebar, [className], mods)}
        >
            <Button
                data-testid={DATA_TEST_ID.sidebarToggle}
                className={styles.collapseBtn}
                square
                size={ButtonSize.L}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <nav>
                <VStack
                    gap="8"
                    role="list"
                    className={styles.items}
                >
                    {itemsList}
                </VStack>
            </nav>
            <ul className={styles.switchers}>
                <li className={styles.li}>
                    <ThemeSwitcher />
                </li>
                <li className={styles.li}>
                    <LangSwitcher
                        className={styles.lang}
                        short={collapsed}
                    />
                </li>
            </ul>
        </aside>
    )

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <aside
                    data-testid={DATA_TEST_ID.sidebar}
                    className={classNames(
                        styles.sidebarRedesigned,
                        [className],
                        mods,
                    )}
                >
                    <Logo
                        className={styles.logo}
                        size={collapsed ? 30 : 60}
                    />

                    <nav>
                        <VStack
                            gap="8"
                            role="list"
                            className={styles.items}
                        >
                            {itemsList}
                        </VStack>
                    </nav>
                    <Icon
                        data-testid={DATA_TEST_ID.sidebarToggle}
                        iconClassName={styles.collapseBtn}
                        onClick={onToggle}
                        Svg={ArrowIcon}
                        clickable
                    />
                    <ul className={styles.switchersRedesigned}>
                        <li className={styles.li}>
                            <ThemeSwitcher />
                        </li>
                        <li className={styles.li}>
                            <LangSwitcher short={collapsed} />
                        </li>
                    </ul>
                </aside>
            }
            // TODO: при использовании remove-feature Deprecated не удаляется, надо продумать
            off={<Deprecated />}
        />
    )
})
