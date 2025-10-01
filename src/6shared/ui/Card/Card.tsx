import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './Card.module.scss'
import { type HTMLAttributes, type JSX, memo, type ReactNode } from 'react'

export const enum CardTheme {
    PRIMARY = 'primary',
    OUTLINE = 'outline',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    theme?: CardTheme
}

export const Card = memo(function Card({
    className,
    children,
    theme = CardTheme.PRIMARY,
    ...props
}: CardProps): JSX.Element {
    return (
        <div
            className={classNames(styles.card, [className, styles[theme]])}
            {...props}
        >
            {children}
        </div>
    )
})
