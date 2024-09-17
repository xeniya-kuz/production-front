import { classNames } from '6shared/lib/classNames/classNames'
import styles from './Text.module.scss'
import { memo } from 'react'

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  S = 'small',
  M = 'medium',
  L = 'large',
}

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
  INVERTED = 'inverted'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}
// memo забирает память, но у нас ее много, а вот вычислительные, процессорные мощности и видеокарту надо беречь
export const Text = memo(function Text (props: TextProps): JSX.Element {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M
  } = props

  const additionalClassNames = [styles[theme], styles[align], styles[size]]

  return (
      <div className={classNames(styles.text, [className, ...additionalClassNames])}>
          {(title != null) && <p className={styles.title}>{title}</p>}
          {(text != null) && <p className={styles.text}>{text}</p>}
      </div>
  )
})
