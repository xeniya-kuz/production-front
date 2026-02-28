import { memo } from 'react'
import styles from './ScrollToolbar.module.scss'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ScrollToTopButton } from '@/features/ScrollToTopButton'
import { classNames } from '@/shared/lib/classNames/classNames'

interface ScrollToolbarProps {
    className?: string
}

export const ScrollToolbar = memo(function ScrollToolbar({
    className,
}: ScrollToolbarProps) {
    return (
        <VStack
            justify="center"
            align="center"
            max
            className={classNames(styles.scrollToolbar, [className])}
        >
            <ScrollToTopButton />
        </VStack>
    )
})
