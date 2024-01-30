import { classNames } from '6shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from '4features/ThemeSwitcher'
import { LangSwitcher } from '4features/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from '6shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from '6shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePaths } from '6shared/config/routeConfig/routeConfig'
import MainIcon from '6shared/assets/icons/main-20-20.svg'
import AboutIcon from '6shared/assets/icons/about-20-20.svg'

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
              <AppLink
                theme={AppLinkTheme.INVERTED}
                to={RoutePaths.main}
                className={styles.item}
              >
                  <MainIcon className={styles.icon}/>
                  <span className={styles.link}>{t('Главная')}</span>
              </AppLink>
              <AppLink
                theme={AppLinkTheme.INVERTED}
                to={RoutePaths.about}
                className={styles.item}
              >
                  <AboutIcon className={styles.icon}/>
                  <span className={styles.link}> {t('О сайте')}</span>
              </AppLink>
          </div>
          <div className={styles.switchers}>
              <ThemeSwitcher />
              <LangSwitcher className={styles.lang} short={collapsed}/>
          </div>
      </div>
  )
}
