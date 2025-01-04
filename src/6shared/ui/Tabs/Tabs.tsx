import { classNames } from '6shared/lib/classNames/classNames'
import styles from './Tabs.module.scss'
import { useCallback, type ReactNode } from 'react'
import { Card, CardTheme } from '../Card/Card'

export interface TabItem<T extends string> {
  value: T
  label: ReactNode
}

interface TabsProps<T extends string> {
  className?: string
  tabs: Array<TabItem<T>>
  activeTab: T
  setActiveTab: (tab: TabItem<T>) => void
}

export const Tabs = <T extends string>({ className, tabs, activeTab, setActiveTab }: TabsProps<T>): JSX.Element => {
  const onClick = useCallback((tab: TabItem<T>) => () => { setActiveTab(tab) }
    , [setActiveTab])

  return (
      <div className={classNames(styles.tabs, [className])}>
          {tabs.map(tab => (
              <Card
                  key={tab.value}
                  className={styles.tab}
                  theme={tab.value === activeTab
                    ? CardTheme.PRIMARY
                    : CardTheme.OUTLINE}
                  onClick={onClick(tab)}
              >
                  {tab.label}
              </Card>
          ))}
      </div>
  )
}
