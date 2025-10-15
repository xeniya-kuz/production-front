import { type JSX, memo, Suspense, useCallback } from 'react'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { LoginFormDeprecatedAsync } from '../LoginFormDeprecated/LoginFormDeprecated.async'
import { toggleFeatures } from '@/6shared/lib/features'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { useLoginActions } from '../../model/slice/loginSlice'
import { useLoginError } from '../../model/selectors/selectLoginError/selectLoginError'
import { useLoginIsLoading } from '../../model/selectors/selectLoginIsLoading/selectLoginIsLoading'
import { useLoginPassword } from '../../model/selectors/selectLoginPassword/selectLoginPassword'
import { useLoginUsername } from '../../model/selectors/selectLoginUsername.ts/selectLoginUsername'
import { useAppDispatch } from '@/6shared/lib/hooks'
import { LoginFormSkeleton } from '../LoginForm/LoginFormSkeleton'
import { Loader } from '@/6shared/ui/deprecated/Loader'

interface LoginFormContainerProps {
    className?: string
    onSuccess: () => void
}

export const LoginFormContainer = memo(function LoginFormContainer({
    className,
    onSuccess,
}: LoginFormContainerProps): JSX.Element {
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

    const LoginForm = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => LoginFormAsync,
        off: () => LoginFormDeprecatedAsync,
    })
    return (
        <Suspense
            fallback={toggleFeatures({
                name: 'isAppRedesigned',
                on: () => <LoginFormSkeleton />,
                off: () => <Loader />,
            })}
        >
            <LoginForm
                error={error}
                onChangeUsername={onChangeUsername}
                username={username}
                onChangePassword={onChangePassword}
                password={password}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onLoginClick={onLoginClick}
                isLoading={isLoading}
                className={className}
            />
        </Suspense>
    )
})
