import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleComments.module.scss'
import { Fragment, type JSX, memo, useCallback } from 'react'
import { CommentForm } from '@/entities/CommentForm'
import { useTranslation } from 'react-i18next'
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text'
import { CommentList } from '@/entities/Comment'
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks'
import {
    DynamicModuleLoader,
    type ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleCommentsReducer } from '../model/slice/articleCommentsSlice'
import {
    useArticleCommentsIsLoading,
    useComments,
} from '../model/selectors/comments/comments'
import { addArticleComment } from '../model/services/addArticleComment/addArticleComment'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'
import { Card } from '@/shared/ui/redesigned/Card'

export interface AddArticleCommentFormProps {
    className?: string
    articleId: string
}

const initialReducer: ReducerList = {
    articleComments: articleCommentsReducer,
}

const ArticleComments = memo(function ArticleComments({
    className,
    articleId,
}: AddArticleCommentFormProps): JSX.Element {
    const dispatch = useAppDispatch()
    const { t } = useTranslation('comments')
    const comments = useComments()
    const commentsisLoading = useArticleCommentsIsLoading()

    useInitialEffect(() => {
        void dispatch(fetchCommentsByArticleId(articleId))
    })

    const onSendComment = useCallback(
        (comment: string) => {
            void dispatch(addArticleComment(comment))
        },
        [dispatch],
    )

    const Tag = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => Card,
        off: () => Fragment,
    })

    return (
        <DynamicModuleLoader reducers={initialReducer}>
            <Tag padding="24">
                <VStack
                    gap="16"
                    className={classNames(styles.addCommentForm, [className])}
                >
                    {/* TODO: h3 */}
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={<Text title={t('comments')} />}
                        off={
                            <TextDeprecated
                                title={t('comments')}
                                size={TextSize.S}
                            />
                        }
                    />

                    <CommentForm onSend={onSendComment} />
                    <CommentList
                        comments={comments}
                        isLoading={commentsisLoading}
                    />
                </VStack>
            </Tag>
        </DynamicModuleLoader>
    )
})

export default ArticleComments
