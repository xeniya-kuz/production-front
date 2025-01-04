import { Skeleton } from '6shared/ui/Skeleton/Skeleton'
import styles from '../ListView/ListView.module.scss'
import { memo } from 'react'
import { classNames } from '6shared/lib/classNames/classNames'

export const SkeletonListView = memo(function SkeletonListView
(): JSX.Element {
  return (
      <>
          <div className={styles.header}>
              <Skeleton width={30} height={30} border='50%'/>
              <Skeleton width={150} height={16} className={styles.username}/>
              <Skeleton width={150} height={16} className={styles.date}/>
          </div>
          <Skeleton width={250} height={24} className={styles.title}/>
          <Skeleton height={200} className={styles.img}/>
          <Skeleton height={16} className={classNames(styles.textBlock)}/>
          <Skeleton height={16} className={classNames(styles.textBlock, [styles.skeleton])}/>
          <Skeleton height={16} className={classNames(styles.textBlock)}/>
          <div className={styles.footer}>
              <Skeleton width={200} height={36} />
          </div>
      </>
  )
})
