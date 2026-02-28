import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './styles.module.scss'
import { type JSX, memo } from 'react'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Error } from '@/shared/ui/redesigned/Error'
import { Card } from '@/shared/ui/redesigned/Card'

interface ProfileCardErrorProps {
    className?: string
}

export const ProfileCardError = memo(function ProfileCardError({
    className,
}: ProfileCardErrorProps): JSX.Element {
    return (
        <Card
            className={classNames(styles.profileCard, [className])}
            padding="24"
        >
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
        </Card>
    )
})
