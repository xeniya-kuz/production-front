import { classNames } from '6shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails } from '5entities/Article'
import { useParams } from 'react-router-dom'
import { Text, TextSize } from '6shared/ui/Text/Text'
import { CommentList } from '5entities/Comment'
import styles from './ArticleDetailsPage.module.scss'
import { DynamicModuleLoader, type ReducersList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducer, selectArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { selectArticleCommentsIsLoading } from '../../model/selectors/comments/comments'
import { useInitialEffect, useAppDispatch } from '6shared/lib/hooks'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from '4features/AddCommentForm'
import { addArticleComment } from '../../model/services/addArticleComment/addArticleComment'

interface ArticleDetailsPageProps {
  className?: string
}

const initialReducer: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation('comments')
  const { articleId } = useParams<{ articleId: string }>()
  const comments = useSelector(selectArticleComments.selectAll)
  const commentsisLoading = useSelector(selectArticleCommentsIsLoading)

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(articleId))
  })

  const onSendComment = useCallback((comment: string) => {
    void dispatch(addArticleComment(comment))
  }, [dispatch])

  if (articleId === undefined) {
    return (
        <div className={classNames(undefined, [className])}>
            { t('article-not-found')}
        </div>
    )
  }

  return (
      <DynamicModuleLoader reducers={initialReducer}>
          <div className={classNames(styles.articleDetailsPage, [className])}>
              <ArticleDetails articleId={articleId}/>
              <Text title={t('comments')} className={styles.commentTitle} size={TextSize.S}/>
              <AddCommentForm onSend={onSendComment}/>
              <CommentList
                comments={comments}
                isLoading={commentsisLoading}
              />
          </div>
      </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
