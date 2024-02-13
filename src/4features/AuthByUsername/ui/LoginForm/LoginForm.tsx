import { classNames } from '6shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducerList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Button, ButtonTheme } from '6shared/ui/Button/Button'
import { Input } from '6shared/ui/Input/Input'
import { Text, TextTheme } from '6shared/ui/Text/Text'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoginError } from '../../model/selectors/selectLoginError/selectLoginError'
import { selectLoginIsLoading } from '../../model/selectors/selectLoginIsLoading/selectLoginIsLoading'
import { selectLoginPassword } from '../../model/selectors/selectLoginPassword/selectLoginPassword'
import { selectLoginUsername } from '../../model/selectors/selectLoginUsername.ts/selectLoginUsername'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import styles from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducerList = {
  loginForm: loginReducer
}

const LoginForm = memo(function LoginForm ({ className }: LoginFormProps): JSX.Element {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const username = useSelector(selectLoginUsername)
  const password = useSelector(selectLoginPassword)
  const isLoading = useSelector(selectLoginIsLoading)
  const error = useSelector(selectLoginError)

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
      <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
      </DynamicModuleLoader>
  )
})

export default LoginForm
