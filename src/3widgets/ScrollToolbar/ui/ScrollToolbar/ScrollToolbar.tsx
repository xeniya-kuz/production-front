import { memo } from 'react'
import styles from './ScrollToolbar.module.scss'
import { VStack } from '@/6shared/ui/redesigned/Stack'
import { ScrollToTopButton } from '@/4features/ScrollToTopButton'
import { classNames } from '@/6shared/lib/classNames/classNames'

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
