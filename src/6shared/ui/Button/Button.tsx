import { classNames } from '6shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_INVERTED = 'outlineInverted',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, square = false, size = ButtonSize.M, disabled = false, ...otherProps } = props

  const mods: Record<string, boolean> = {
    [styles.square]: square,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    [styles[theme!]]: theme !== undefined,
    [styles[size]]: size !== undefined,
    [styles.disabled]: disabled
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
}
