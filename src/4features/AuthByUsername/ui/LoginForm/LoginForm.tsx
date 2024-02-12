import { classNames } from '6shared/lib/classNames/classNames'
import styles from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '6shared/ui/Button/Button'
import { Input } from '6shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { selectLoginState } from '../../model/selectors/selectLoginState/selectLoginState'
import { loginActions } from '../../model/slice/loginSlice'
import { Text, TextTheme } from '6shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(function LoginForm ({ className }: LoginFormProps): JSX.Element {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, error, isLoading } = useSelector(selectLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
      <div className={classNames(styles.loginForm, [className])}>
          <Text title={t('Форма авторизации')}/>
          {(error !== undefined) &&
          <Text text={t('Логин или пароль введены неправильно')} theme={TextTheme.ERROR}/>}
          <Input
            type='text'
            className={styles.input}
            autofocus
            placeholder={t('Введите логин')}
            onChange={onChangeUsername}
            value={username}
          />
          <Input
            type='text'
            className={styles.input}
            placeholder={t('Введите пароль')}
            onChange={onChangePassword}
            value={password}
          />
          <Button
            theme={ButtonTheme.OUTLINE}
            className={styles.loginBtn}
            onClick={onLoginClick}
            disabled={isLoading}
          >
              {t('Войти')}
          </Button>
      </div>
  )
})
