import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './styles.module.scss'
import { type JSX, memo } from 'react'
import { HStack } from '@/6shared/ui/redesigned/Stack'
import { Loader } from '@/6shared/ui/deprecated/Loader'

interface ProfileCardDeprecatedLoaderProps {
    className?: string
}

/**
 * Устарел, используем новый компонент из папки ProfileCard
 * @deprecated
 */
export const ProfileCardDeprecatedLoader = memo(function ProfileCardLoader({
    className,
}: ProfileCardDeprecatedLoaderProps): JSX.Element {
    return (
        <HStack
            justify="center"
            max
            className={classNames(styles.profileCard, [
                className,
                styles.loader,
            ])}
        >
            <Loader />
        </HStack>
    )
})
