import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './Card.module.scss'
import { type HTMLAttributes, type JSX, memo, type ReactNode } from 'react'

export const CardTheme = {
    PRIMARY: 'primary',
    OUTLINE: 'outline',
} as const
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type CardTheme = (typeof CardTheme)[keyof typeof CardTheme]

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    theme?: CardTheme
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
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
