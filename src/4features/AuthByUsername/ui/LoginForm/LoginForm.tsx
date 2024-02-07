import { classNames } from '6shared/lib/classNames/classNames'
import styles from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from '6shared/ui/Button/Button'
import { Input } from '6shared/ui/Input/Input'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps): JSX.Element => {
  const { t } = useTranslation()

  return (
      <div className={classNames(styles.loginForm, [className])}>
          <Input type='text' className={styles.input} autofocus placeholder={t('Введите логин')}/>
          <Input type='text' className={styles.input} placeholder={t('Введите пароль')}/>
          <Button className={styles.loginBtn}>{t('Войти')}</Button>
      </div>
  )
}
