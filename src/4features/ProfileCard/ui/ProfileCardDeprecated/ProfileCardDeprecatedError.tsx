import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './styles.module.scss'
import { type JSX, memo } from 'react'
import { HStack } from '@/6shared/ui/redesigned/Stack'
import { Error } from '@/6shared/ui/deprecated/Error'

interface ProfileCardDeprecatedErrorProps {
    className?: string
}

/**
 * Устарел, используем новый компонент bp папки ProfileCard
 * @deprecated
 */
export const ProfileCardDeprecatedError = memo(function ProfileCardError({
    className,
}: ProfileCardDeprecatedErrorProps): JSX.Element {
    return (
        <HStack
            justify="center"
            max
            className={classNames(styles.profileCard, [
                className,
                styles.error,
            ])}
        >
            <Error />
        </HStack>
    )
})
