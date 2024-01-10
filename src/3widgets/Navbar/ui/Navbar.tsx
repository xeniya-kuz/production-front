import { classNames } from '6shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from '6shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => {
  const { t } = useTranslation()
  return (
      <div className={classNames(styles.navbar, [className])}>
          <div className={styles.links}>
              <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/"
          className={styles.mainLink}
        >
                  {t('Главная')}
              </AppLink>
              <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                  {t('О сайте')}
              </AppLink>
          </div>
      </div>
  )
}
