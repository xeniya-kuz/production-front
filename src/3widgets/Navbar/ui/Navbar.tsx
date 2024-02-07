import { classNames } from '6shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { useCallback, useState } from 'react'
import { Modal } from '6shared/ui/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '6shared/ui/Button/Button'
import { LoginModal } from '4features/AuthByUsername'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => {
  const { t } = useTranslation()

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
      <div className={classNames(styles.navbar, [className])}>
          <Button className={styles.links}
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={onToggleModal}>
              {t('Войти')}
          </Button>
          <LoginModal isOpen={isAuthModal} onClose={onToggleModal}/>
      </div>
  )
}
