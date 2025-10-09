import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './Card.module.scss'
import { type HTMLAttributes, type JSX, memo, type ReactNode } from 'react'

type CardVariant = 'primary' | 'outline' | 'light'
type CardPadding = '0' | '8' | '16' | '24'
type CardRadius = 'normal' | 'round'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    variant?: CardVariant
    padding?: CardPadding
    radius?: CardRadius
}

const mapPaddingToClass: Record<CardPadding, string> = {
    0: 'padding_0',
    8: 'padding_8',
    16: 'padding_16',
    24: 'padding_24',
}

export const Card = memo(function Card({
    className,
    children,
    variant = 'primary',
    padding = '16',
    radius = 'normal',
    ...props
}: CardProps): JSX.Element {
    const paddingClass = mapPaddingToClass[padding]

    return (
        <div
            className={classNames(styles.card, [
                className,
                styles[variant],
                styles[paddingClass],
                styles[radius],
            ])}
            {...props}
        >
            {children}
        </div>
    )
})
