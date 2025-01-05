import { classNames } from '6shared/lib/classNames/classNames'
import styles from './styles.module.scss'
import { memo } from 'react'
import { Skeleton } from '6shared/ui/Skeleton/Skeleton'

interface SketelonArticleProps {
  className?: string
}

export const SketelonArticle = memo(function SketelonArticle
({ className }: SketelonArticleProps): JSX.Element {
  return (
      <div className={classNames(undefined, [className])}>
          <Skeleton className={styles.avatar} width={200} height={200} border='50%'/>
          <Skeleton width={300} height={32} />
          <Skeleton width={600} height={24} />
          <Skeleton width='100%' height={200} />
          <Skeleton width='100%' height={200} />

      </div>
  )
})
