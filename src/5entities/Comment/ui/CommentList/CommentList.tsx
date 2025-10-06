import { classNames } from '@/6shared/lib/classNames/classNames'
import { type JSX, memo } from 'react'
import { type Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'
import { Text } from '@/6shared/ui/deprecated/Text/Text'
import { useTranslation } from 'react-i18next'
import { VStack } from '@/6shared/ui/deprecated/Stack'

interface CommentListProps {
    className?: string
    comments: Comment[]
    isLoading?: boolean
}

export const CommentList = memo(function CommentList({
    className,
    comments,
    isLoading,
}: CommentListProps): JSX.Element {
    const { t } = useTranslation('comments')

    return (
        <VStack
            gap="16"
            max
            className={classNames(className)}
        >
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <Text text={t('no-comments')} />
            )}
        </VStack>
    )
})
