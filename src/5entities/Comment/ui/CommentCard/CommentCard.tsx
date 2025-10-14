import AvatarMock from '@/6shared/assets/icons/user.png'
import { getRouteProfile } from '@/6shared/const/router'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { toggleFeatures, ToggleFeatures } from '@/6shared/lib/features'
import { AppLink as AppLinkDeprecated } from '@/6shared/ui/deprecated/AppLink'
import { Avatar as AvatarDeprecated } from '@/6shared/ui/deprecated/Avatar'
import { Text as TextDeprecated, TextSize } from '@/6shared/ui/deprecated/Text'
import { AppLink as AppLinkRedesigned } from '@/6shared/ui/redesigned/AppLink'
import { Avatar as AvatarRedesigned } from '@/6shared/ui/redesigned/Avatar'
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack'
import { Text as TextRedesigned } from '@/6shared/ui/redesigned/Text'
import {
    type FC,
    Fragment,
    type JSX,
    memo,
    type PropsWithChildren,
} from 'react'
import { type Comment } from '../../model/types/comment'
import styles from './CommentCard.module.scss'
import { SkeletonCommentCard } from './SkeletonCommentCard'
import { Card } from '@/6shared/ui/redesigned/Card'

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
    const AppLink: FC<PropsWithChildren & { to: string }> = (props) => (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<AppLinkRedesigned {...props} />}
            off={<AppLinkDeprecated {...props} />}
        />
    )

    const Text: FC = () => (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<TextRedesigned text={comment.text} />}
            off={
                <TextDeprecated
                    text={comment.text}
                    className={styles.text}
                />
            }
        />
    )

    const commentCardStyles = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => styles.commentCardRedesigned,
        off: () => styles.commentCardDeprecated,
    })

    if (isLoading) {
        return (
            <VStack
                gap="16"
                max
                className={classNames(commentCardStyles, [
                    className,
                    styles.loading,
                ])}
            >
                <SkeletonCommentCard />
            </VStack>
        )
    }

    const Tag = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => Card,
        off: () => Fragment,
    })

    return (
        <Tag variant="light">
            <VStack
                gap="16"
                max
                className={classNames(commentCardStyles, [className])}
                data-testid={DATA_TEST_ID.commentCard}
            >
                <AppLink to={getRouteProfile(comment.user.id)}>
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <AvatarRedesigned
                                size={32}
                                alt={comment.user.username}
                                src={comment.user.avatar}
                                username={comment.user.username}
                                gap="8"
                            />
                        }
                        off={
                            <HStack gap="4">
                                <AvatarDeprecated
                                    size={30}
                                    alt={comment.user.username}
                                    src={comment.user.avatar ?? AvatarMock}
                                />
                                <TextDeprecated
                                    title={comment.user.username}
                                    className={styles.username}
                                    size={TextSize.S}
                                />
                            </HStack>
                        }
                    />
                </AppLink>
                <Text />
            </VStack>
        </Tag>
    )
})
