import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './ArticleComments.module.scss'
import { Fragment, type JSX, memo, useCallback } from 'react'
import { CommentForm } from '@/5entities/CommentForm'
import { useTranslation } from 'react-i18next'
import { Text as TextDeprecated, TextSize } from '@/6shared/ui/deprecated/Text'
import { CommentList } from '@/5entities/Comment'
import { useAppDispatch, useInitialEffect } from '@/6shared/lib/hooks'
import {
    DynamicModuleLoader,
    type ReducerList,
} from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleCommentsReducer } from '../model/slice/articleCommentsSlice'
import {
    useArticleCommentsIsLoading,
    useComments,
} from '../model/selectors/comments/comments'
import { addArticleComment } from '../model/services/addArticleComment/addArticleComment'
import { VStack } from '@/6shared/ui/redesigned/Stack'
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { toggleFeatures, ToggleFeatures } from '@/6shared/lib/features'
import { Text } from '@/6shared/ui/redesigned/Text'
import { Card } from '@/6shared/ui/redesigned/Card'

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
