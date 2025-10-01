import { classNames, type Mods } from '@/6shared/lib/classNames/classNames'
import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react'
import styles from './Button.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    /**
     * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
     */
    theme?: ButtonTheme
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
}

// обычно в качестве children кнопки передается строка, поэтому используем memo
// (обычно, если в компоненте есть children, то memo не используем)
export const Button = memo(function Button(props: ButtonProps) {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square = false,
        size = ButtonSize.M,
        disabled = false,
        fullWidth,
        ...otherProps
    } = props

    const mods: Mods = {
        [styles.square]: square,
        [styles[theme]]: theme,
        [styles[size]]: size,
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
    }

    return (
        <button
            className={classNames(styles.button, [className], mods)}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
})
