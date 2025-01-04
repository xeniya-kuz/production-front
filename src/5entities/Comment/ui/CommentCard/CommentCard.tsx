import { classNames } from '6shared/lib/classNames/classNames'
import styles from './CommentCard.module.scss'
import { memo } from 'react'
import { type Comment } from '../../model/types/comment'
import { Avatar } from '6shared/ui/Avatar/Avatar'
import { Text, TextSize } from '6shared/ui/Text/Text'
import AvatarMock from '6shared/assets/icons/user.png'
import { AppLink } from '6shared/ui/AppLink/AppLink'
import { routePaths } from '6shared/config/routeConfig/routeConfig'
import { SkeletonCommentCard } from './SkeletonCommentCard'

interface CommentCardProps {
  className?: string
  comment: Comment
  isLoading?: boolean
}

export const CommentCard = memo(function CommentCard
({ className, comment, isLoading }: CommentCardProps): JSX.Element {
  if (isLoading === true) {
    return (
        <div className={classNames(styles.commentCard, [className, styles.loading])}>
            <SkeletonCommentCard
                classNameHeader={styles.header}
                classNameUsername={styles.username}
             />
        </div>
    )
  }

  return (
      <div className={classNames(styles.commentCard, [className])} >
          <AppLink
              to={`${routePaths.profile}/${comment.user.id}`}
              className={styles.header}>
              <Avatar size={30} alt={comment.user.username} src={comment.user.avatar ?? AvatarMock}/>
              <Text title={comment.user.username} className={styles.username} size={TextSize.S}/>
          </AppLink>
          <Text text={comment.text} className={styles.text} />
      </div>
  )
})
