import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './styles.module.scss'
import { type JSX, memo } from 'react'
import { VStack } from '@/6shared/ui/redesigned/Stack'
import { Skeleton } from '@/6shared/ui/redesigned/Skeleton'

interface SketelonArticleProps {
    className?: string
}

export const SketelonArticle = memo(function SketelonArticle({
    className,
}: SketelonArticleProps): JSX.Element {
    return (
        <VStack
            max
            gap={'16'}
            className={classNames(undefined, [className])}
        >
            <Skeleton height={38} />
            <Skeleton
                width={500}
                height={28}
            />
            <Skeleton
                className={styles.avatar}
                height={400}
            />

            <Skeleton
                height={24}
                width={300}
            />
            <Skeleton height={300} />
            <Skeleton
                height={24}
                width={300}
            />
            <Skeleton height={300} />
        </VStack>
    )
})
