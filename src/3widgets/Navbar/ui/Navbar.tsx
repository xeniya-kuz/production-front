import { classNames } from '6shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '6shared/ui/Button/Button'
import { LoginModal } from '4features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserAuthData, userActions } from '5entities/User'
import { type AppDispatch } from '1app/providers/StoreProvider'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => {
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()
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
        <div className={classNames(styles.navbar, [className])}>
            <Button className={styles.links}
              theme={ButtonTheme.CLEAR_INVERTED}
              onClick={onLogout}
            >
                {t('Выйти')}
            </Button>
        </div>
    )
  }

  return (
      <div className={classNames(styles.navbar, [className])}>
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
      </div>
  )
}
