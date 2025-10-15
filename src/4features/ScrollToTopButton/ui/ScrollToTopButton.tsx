import CircleIcon from '@/6shared/assets/icons/circle-up.svg'
import { Icon } from '@/6shared/ui/redesigned/Icon'
import { type JSX, memo } from 'react'
import styles from './ScrollToTopButton.module.scss'
import { classNames } from '@/6shared/lib/classNames/classNames'

interface ScrollToTopButtonProps {
    className?: string
}

export const ScrollToTopButton = memo(function ScrollToTopButton({
    className,
}: ScrollToTopButtonProps): JSX.Element {
    const onClick = (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <Icon
            iconClassName={classNames(styles.scrollToTopButton, [className])}
            Svg={CircleIcon}
            clickable
            onClick={onClick}
            title="На верх"
        />
    )
})
