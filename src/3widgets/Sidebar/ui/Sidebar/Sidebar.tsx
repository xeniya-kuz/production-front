import { classNames } from '6shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from '4features/ThemeSwitcher'
import { LangSwitcher } from '4features/LangSwitcher'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(true)

  const { t } = useTranslation()

  const onToggle = (): void => {
    setCollapsed((prev) => !prev)
  }

  return (
      <div
      className={classNames(styles.sidebar, [className], {
        [styles.collapsed]: collapsed
      })}
    >
          <button onClick={onToggle}>{t('Переключить')}</button>
          <div className={styles.switchers}>
              <ThemeSwitcher />
              <LangSwitcher className={styles.lang} />
          </div>
      </div>
  )
}
