import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './CommentCard.module.scss'
import { type JSX, memo } from 'react'
import { type Comment } from '../../model/types/comment'
import { Avatar } from '@/6shared/ui/Avatar/Avatar'
import { Text, TextSize } from '@/6shared/ui/Text/Text'
import AvatarMock from '@/6shared/assets/icons/user.png'
import { AppLink } from '@/6shared/ui/AppLink/AppLink'
import { SkeletonCommentCard } from './SkeletonCommentCard'
import { HStack, VStack } from '@/6shared/ui/Stack'
import { getRouteProfile } from '@/6shared/const/router'
import { DATA_TEST_ID } from '@/6shared/const/tests'

interface CommentCardProps {
    className?: string
    comment: Comment
    isLoading?: boolean
}

export const CommentCard = memo(function CommentCard({
    className,
    comment,
    isLoading,
}: CommentCardProps): JSX.Element {
    if (isLoading === true) {
        return (
            <VStack
                gap="16"
                max
                className={classNames(styles.commentCard, [
                    className,
                    styles.loading,
                ])}
            >
                <SkeletonCommentCard />
            </VStack>
        )
    }

    return (
        <VStack
            gap="16"
            max
            className={classNames(styles.commentCard, [className])}
            data-testid={DATA_TEST_ID.commentCard}
        >
            <AppLink to={getRouteProfile(comment.user.id)}>
                <HStack gap="4">
                    <Avatar
                        size={30}
                        alt={comment.user.username}
                        src={comment.user.avatar ?? AvatarMock}
                    />
                    <Text
                        title={comment.user.username}
                        className={styles.username}
                        size={TextSize.S}
                    />
                </HStack>
            </AppLink>
            <Text
                text={comment.text}
                className={styles.text}
            />
        </VStack>
    )
})
