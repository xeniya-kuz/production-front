import { classNames } from '6shared/lib/classNames/classNames'
import styles from './Card.module.scss'
import { type HTMLAttributes, memo, type ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export const Card = memo(function Card
({ className, children, ...props }: CardProps): JSX.Element {
  return (
      <div
        className={classNames(styles.card, [className])}
        {...props}>
          {children}
      </div>
  )
})
