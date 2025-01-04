import { LoginModal } from '4features/AuthByUsername'
import { selectUserAuthData, userActions } from '5entities/User'
import { classNames } from '6shared/lib/classNames/classNames'
import { useAppDispatch } from '6shared/lib/hooks'
import { Button, ButtonTheme } from '6shared/ui/Button/Button'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import styles from './Navbar.module.scss'
import { Text, TextTheme } from '6shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from '6shared/ui/AppLink/AppLink'
import { routePaths } from '6shared/config/routeConfig/routeConfig'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(function Navbar ({ className }: NavbarProps): JSX.Element {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const authData = useSelector(selectUserAuthData)

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData !== undefined) {
    return (
        <header className={classNames(styles.navbar, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Text className={styles.appName} title='Production project' theme={TextTheme.INVERTED}/>
            <AppLink
                to={routePaths['article-create']}
                theme={AppLinkTheme.INVERTED}
                className={styles.create}
             >
                {t('articles:article-creation')}
            </AppLink>
            <Button className={styles.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onLogout}
            >
                {t('Выйти')}
            </Button>
        </header>
    )
  }

  return (
      <header className={classNames(styles.navbar, [className])}>
          <Button className={styles.links}
              theme={ButtonTheme.CLEAR_INVERTED}
              onClick={onToggleModal}
          >
              {t('Войти')}
          </Button>
          {isAuthModal && <LoginModal
              isOpen={isAuthModal}
              onClose={onToggleModal}
          />}
      </header>
  )
})
