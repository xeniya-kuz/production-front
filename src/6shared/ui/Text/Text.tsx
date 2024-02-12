import { classNames } from '6shared/lib/classNames/classNames'
import styles from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

export const Text = ({ className, title, text, theme = TextTheme.PRIMARY }: TextProps): JSX.Element => {
  return (
      <div className={classNames(styles.text, [className, styles[theme]])}>
          {(title != null) && <p className={styles.title}>{title}</p>}
          {(text != null) && <p className={styles.text}>{text}</p>}
      </div>
  )
}
