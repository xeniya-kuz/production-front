import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './styles.module.scss'
import { type JSX, memo } from 'react'
import { Skeleton } from '@/6shared/ui/deprecated/Skeleton'
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack'

interface SketelonArticleDeprecatedProps {
    className?: string
}

/**
 * Устарел, используем новый компонент SketelonArticle
 * @deprecated
 */
export const SketelonArticleDeprecated = memo(function SketelonArticle({
    className,
}: SketelonArticleDeprecatedProps): JSX.Element {
    return (
        <VStack
            max
            gap={'16'}
            className={classNames(undefined, [className])}
        >
            <HStack
                max
                justify="center"
            >
                <Skeleton
                    className={styles.avatar}
                    width={200}
                    height={200}
                    border="50%"
                />
            </HStack>
            <Skeleton
                width={300}
                height={32}
            />
            <Skeleton
                width={600}
                height={24}
            />
            <Skeleton
                width="100%"
                height={200}
            />
            <Skeleton
                width="100%"
                height={200}
            />
        </VStack>
    )
})
