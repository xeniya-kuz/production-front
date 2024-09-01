import { classNames } from '6shared/lib/classNames/classNames'
import styles from './CommentCard.module.scss'
import { memo } from 'react'
import { type Comment } from '../../model/types/comment'
import { Avatar } from '6shared/ui/Avatar/Avatar'
import { Text, TextSize } from '6shared/ui/Text/Text'
import AvatarMock from '6shared/assets/icons/user.png'
import { Skeleton } from '6shared/ui/Skeleton/Skeleton'

interface CommentCardProps {
  className?: string
  comment: Comment
  isLoading?: boolean
}

export const CommentCard = memo(function CommentCard
({ className, comment, isLoading }: CommentCardProps): JSX.Element {
  if (isLoading === true) {
    return (
        <div className={classNames(styles.commentCard, [className])}>
            <div className={styles.header }>
                <Skeleton border='50%' width={30} height={30}/>
                <Skeleton width={150} height={20} className={styles.username}/>
            </div>
            <Skeleton width={'100%'} height={16} className={styles.skeleton}/>
            <Skeleton width={'70%'} height={16} className={styles.skeleton}/>
        </div>
    )
  }

  return (
      <div className={classNames(styles.commentCard, [className])}>
          <div className={styles.header }>
              <Avatar size={30} alt={comment.user.username} src={comment.user.avatar ?? AvatarMock}/>
              <Text title={comment.user.username} className={styles.username} size={TextSize.S}/>
          </div>
          <Text text={comment.text} className={styles.text} />
      </div>
  )
})
