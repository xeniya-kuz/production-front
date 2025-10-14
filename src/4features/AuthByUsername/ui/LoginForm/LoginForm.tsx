import { classNames } from '@/6shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducerList,
} from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Button } from '@/6shared/ui/redesigned/Button'
import { Input } from '@/6shared/ui/redesigned/Input'
import { Text } from '@/6shared/ui/redesigned/Text'
import { type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { loginReducer } from '../../model/slice/loginSlice'
import styles from './LoginForm.module.scss'
import { VStack } from '@/6shared/ui/redesigned/Stack'

export interface LoginFormProps {
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

const LoginForm = memo(function LoginForm({
    className,
    error,
    onChangeUsername,
    username,
    onChangePassword,
    password,
    onLoginClick,
    isLoading,
}: LoginFormProps): JSX.Element {
    const { t } = useTranslation()

    return (
        <DynamicModuleLoader reducers={initialReducer}>
            <div className={classNames(styles.loginForm, [className])}>
                <VStack
                    gap="16"
                    max
                >
                    <Text title={t('Форма авторизации')} />
                    {error && (
                        <Text
                            text={t('Логин или пароль введены неправильно')}
                            variant="error"
                        />
                    )}

                    <VStack
                        gap="8"
                        max
                    >
                        <Text
                            className={styles.label}
                            text={t('Введите логин')}
                        />
                        <Input
                            type="text"
                            autofocus
                            onChange={onChangeUsername}
                            value={username}
                        />
                    </VStack>
                    <VStack
                        gap="8"
                        max
                    >
                        <Text
                            className={styles.label}
                            text={t('Введите пароль')}
                        />
                        <Input
                            type="text"
                            onChange={onChangePassword}
                            value={password}
                        />
                    </VStack>

                    <Button
                        variant="outline"
                        className={styles.loginBtn}
                        onClick={onLoginClick}
                        disabled={isLoading}
                    >
                        {t('Войти')}
                    </Button>
                </VStack>
            </div>
        </DynamicModuleLoader>
    )
})

export default LoginForm
