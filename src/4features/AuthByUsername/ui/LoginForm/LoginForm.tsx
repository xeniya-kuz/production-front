import { classNames } from '@/6shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducerList,
} from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/6shared/lib/hooks'
import { Button, ButtonTheme } from '@/6shared/ui/deprecated/Button/Button'
import { Input } from '@/6shared/ui/deprecated/Input/Input'
import { Text, TextTheme } from '@/6shared/ui/deprecated/Text/Text'
import { type JSX, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useLoginError } from '../../model/selectors/selectLoginError/selectLoginError'
import { useLoginIsLoading } from '../../model/selectors/selectLoginIsLoading/selectLoginIsLoading'
import { useLoginPassword } from '../../model/selectors/selectLoginPassword/selectLoginPassword'
import { useLoginUsername } from '../../model/selectors/selectLoginUsername.ts/selectLoginUsername'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginReducer, useLoginActions } from '../../model/slice/loginSlice'
import styles from './LoginForm.module.scss'

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const initialReducer: ReducerList = {
    loginForm: loginReducer,
}

const LoginForm = memo(function LoginForm({
    className,
    onSuccess,
}: LoginFormProps): JSX.Element {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const username = useLoginUsername()
    const password = useLoginPassword()
    const isLoading = useLoginIsLoading()
    const error = useLoginError()
    const { setPassword, setUsername } = useLoginActions()

    const onChangeUsername = useCallback(
        ({ value }: { name: string; value: string }) => {
            setUsername(value)
        },
        [setUsername],
    )

    const onChangePassword = useCallback(
        ({ value }: { name: string; value: string }) => {
            setPassword(value)
        },
        [setPassword],
    )

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [dispatch, username, password, onSuccess])

    return (
        <DynamicModuleLoader reducers={initialReducer}>
            <div className={classNames(styles.loginForm, [className])}>
                <Text title={t('Форма авторизации')} />
                {error !== undefined && (
                    <Text
                        text={t('Логин или пароль введены неправильно')}
                        theme={TextTheme.ERROR}
                    />
                )}
                <Input
                    type="text"
                    className={styles.input}
                    autofocus
                    placeholder={t('Введите логин')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    className={styles.input}
                    placeholder={t('Введите пароль')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={styles.loginBtn}
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
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
