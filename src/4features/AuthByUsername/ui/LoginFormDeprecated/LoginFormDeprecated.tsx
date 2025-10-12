import { classNames } from '@/6shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducerList,
} from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Button, ButtonTheme } from '@/6shared/ui/deprecated/Button/Button'
import { Input } from '@/6shared/ui/deprecated/Input/Input'
import { Text, TextTheme } from '@/6shared/ui/deprecated/Text/Text'
import { type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { loginReducer } from '../../model/slice/loginSlice'
import styles from './LoginFormDeprecated.module.scss'

export interface LoginFormDeprecatedProps {
    className?: string
    error?: string
    onChangeUsername: (props: { name: string; value: string }) => void
    username: string
    onChangePassword: (props: { name: string; value: string }) => void
    password: string
    onLoginClick: () => void
    isLoading?: boolean
}

const initialReducer: ReducerList = {
    loginForm: loginReducer,
}

const LoginFormDeprecated = memo(function LoginForm({
    className,
    error,
    onChangeUsername,
    username,
    onChangePassword,
    password,
    onLoginClick,
    isLoading,
}: LoginFormDeprecatedProps): JSX.Element {
    const { t } = useTranslation()

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

export default LoginFormDeprecated
