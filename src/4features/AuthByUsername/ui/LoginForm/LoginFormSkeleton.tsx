import { classNames } from '@/6shared/lib/classNames/classNames'
import { type JSX, memo } from 'react'

import styles from './LoginForm.module.scss'
import { VStack } from '@/6shared/ui/redesigned/Stack'
import { Skeleton } from '@/6shared/ui/redesigned/Skeleton'

interface LofinFormSkeletonProps {
    className?: string
}

export const LoginFormSkeleton = memo(function LoginFormSkeleton({
    className,
}: LofinFormSkeletonProps): JSX.Element {
    return (
        <div className={classNames(styles.loginForm, [className])}>
            <VStack
                gap="16"
                max
            >
                <Skeleton
                    width="70%"
                    height={30}
                />

                <VStack
                    gap="8"
                    max
                >
                    <Skeleton
                        className={styles.label}
                        height={20}
                        width={200}
                    />
                    <Skeleton height={32} />
                </VStack>
                <VStack
                    gap="8"
                    max
                >
                    <Skeleton
                        className={styles.label}
                        height={20}
                        width={200}
                    />
                    <Skeleton height={32} />
                </VStack>

                <Skeleton
                    className={styles.loginBtn}
                    border="16px"
                    width={80}
                    height={32}
                />
            </VStack>
        </div>
    )
})
