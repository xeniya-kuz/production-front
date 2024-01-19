import { classNames } from '6shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from '4features/ThemeSwitcher'
import { LangSwitcher } from '4features/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button } from '6shared/ui/Button/Button'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const { t } = useTranslation()

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
          <Button data-testid='sidebar-toggle' onClick={onToggle}>{t('Переключить')}</Button>
          <div className={styles.switchers}>
              <ThemeSwitcher />
              <LangSwitcher className={styles.lang} />
          </div>
      </div>
  )
}
