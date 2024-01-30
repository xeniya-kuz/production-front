import { classNames } from '6shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => {
  const { t } = useTranslation()
  return (
      <div className={classNames(styles.navbar, [className])}>
          <div className={styles.links}>
              /
          </div>
      </div>
  )
}
