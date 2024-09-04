import styles from './CommentCard.module.scss'
import { memo } from 'react'
import { Skeleton } from '6shared/ui/Skeleton/Skeleton'

interface SkeletonCommentCardProps {
  classNameHeader?: string
  classNameUsername?: string
}

export const SkeletonCommentCard = memo(function SkeletonCommentCard
({ classNameHeader, classNameUsername }: SkeletonCommentCardProps): JSX.Element {
  return (
      <>
          <div className={classNameHeader}>
              <Skeleton border='50%' width={30} height={30}/>
              <Skeleton width={150} height={20} className={classNameUsername}/>
          </div>
          <Skeleton width={'100%'} height={16} className={styles.skeleton}/>
          <Skeleton width={'70%'} height={16} className={styles.skeleton}/>
      </>
  )
})
