import { classNames } from '6shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
	OUTLINE= 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props
  return (
      <button
      className={classNames(styles.button, [className, (theme !== undefined) ? styles[theme] : undefined])}
      {...otherProps}
    >
          {children}
      </button>
  )
}
