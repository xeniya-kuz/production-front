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

type HeaderTagType = 'h1' | 'h2' | 'h3'
const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1'
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

  const HeaderTag = mapSizeToHeaderTag[size]

  return (
      <div className={classNames(styles.text, [className, ...additionalClassNames])}>
          {(title != null) && <HeaderTag className={styles.title}>{title}</HeaderTag>}
          {(text != null) && <p className={styles.text}>{text}</p>}
      </div>
  )
})
