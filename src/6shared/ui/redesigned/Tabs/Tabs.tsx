import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './Tabs.module.scss'
import { type JSX, useCallback, type ReactNode } from 'react'
import { Flex, type FlexDirection } from '../Stack/Flex/Flex'
import { Button, type ButtonSize } from '../Button'

export interface TabItem<T extends string> {
    value: T
    label: ReactNode
    disabled?: boolean
}

interface TabsProps<T extends string> {
    className?: string
    tabs: Array<TabItem<T>>
    activeTab: T
    setActiveTab: (tab: TabItem<T>) => void
    direction?: FlexDirection
    size?: ButtonSize
}

export const Tabs = <T extends string>({
    className,
    tabs,
    activeTab,
    setActiveTab,
    direction = 'row',
    size = 'm',
}: TabsProps<T>): JSX.Element => {
    const onClick = useCallback(
        (tab: TabItem<T>) => () => {
            if (tab.value !== activeTab) {
                setActiveTab(tab)
            }
        },
        [setActiveTab, activeTab],
    )

    return (
        <Flex
            gap="8"
            className={classNames(styles.tabs, [className])}
            direction={direction}
            align="start"
        >
            {tabs.map((tab) => (
                <Button
                    key={tab.value}
                    className={classNames(styles.tab, [], {
                        [styles.active]: tab.value === activeTab,
                    })}
                    variant={tab.value === activeTab ? 'filled' : 'clearWP'}
                    onClick={onClick(tab)}
                    disabled={tab.disabled}
                    size={size}
                    hover={tab.value !== activeTab}
                >
                    {tab.label}
                </Button>
            ))}
        </Flex>
    )
}
