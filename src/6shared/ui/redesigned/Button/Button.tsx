import { classNames, type Mods } from '@/6shared/lib/classNames/classNames'
import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react'
import styles from './Button.module.scss'

export type ButtonSize = 's' | 'm' | 'l'

type ButtonVariant = 'clearWP' | 'clear' | 'filled' | 'outline'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    /**
     * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
     */
    variant?: ButtonVariant
    /**
     * Флаг, делающий кнопку квадратной
     */
    square?: boolean
    /**
     * Размер кнопки в соответствии с дизайн системой
     */
    size?: ButtonSize
    /**
     * Флаг, отвечающий за работу кнопки
     */
    disabled?: boolean
    /**
     * Содержимое кнопки
     */
    children?: ReactNode
    /**
     * Увеличивает кнопку на всю свободную ширину
     */
    fullWidth?: boolean
    /**
     * Добавляет элемент слева
     */
    addonLeft?: ReactNode
    /**
     * Добавляет элемент справа
     */
    addonRight?: ReactNode
    hover?: boolean
}

// обычно в качестве children кнопки передается строка, поэтому используем memo
// (обычно, если в компоненте есть children, то memo не используем)
export const Button = memo(function Button(props: ButtonProps) {
    const {
        className,
        children,
        square = false,
        size = 'm',
        disabled = false,
        fullWidth,
        variant = 'filled',
        addonLeft,
        addonRight,
        hover = true,
        ...otherProps
    } = props

    const mods: Mods = {
        [styles.square]: square,
        [styles[size]]: size,
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
        [styles.hover]: hover && !disabled,
        [styles.withAddonRight]: !!addonRight,
        [styles.withAddonLeft]: !!addonLeft,
    }

    return (
        <button
            className={classNames(
                styles.button,
                [styles[variant], className],
                mods,
            )}
            disabled={disabled}
            {...otherProps}
        >
            <div className={styles.addonLeft}>{addonLeft}</div>
            {children}
            <div className={styles.addonRight}>{addonRight}</div>
        </button>
    )
})
