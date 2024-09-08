import { classNames } from '6shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails } from '5entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { Text, TextSize } from '6shared/ui/Text/Text'
import { CommentList } from '5entities/Comment'
import styles from './ArticleDetailsPage.module.scss'
import { DynamicModuleLoader, type ReducersList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducer, selectArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { selectArticleCommentsIsLoading } from '../../model/selectors/comments/comments'
import { useInitialEffect, useAppDispatch } from '6shared/lib/hooks'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from '4features/AddCommentForm'
import { addArticleComment } from '../../model/services/addArticleComment/addArticleComment'
import { selectArticleDetailsError } from '5entities/Article/model/selectors/selectArticleDetailsError/selectArticleDetailsError'
import { Button } from '6shared/ui/Button/Button'
import { routePaths } from '6shared/config/routeConfig/routeConfig'
import { Page } from '6shared/ui/Page/Page'

interface ArticleDetailsPageProps {
  className?: string
}

const initialReducer: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation(['comments', 'buttons'])
  const navigate = useNavigate()
  const { articleId } = useParams<{ articleId: string }>()
  const comments = useSelector(selectArticleComments.selectAll)
  const commentsisLoading = useSelector(selectArticleCommentsIsLoading)
  const articleError = useSelector(selectArticleDetailsError)

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(articleId))
  })

  const onSendComment = useCallback((comment: string) => {
    void dispatch(addArticleComment(comment))
  }, [dispatch])

  const onBackToList = useCallback(() => {
    navigate(routePaths.articles)
  }, [navigate])

  if (articleId === undefined) {
    return (
        <Page className={classNames(styles.articleDetailsPage, [className])}>
            { t('article-not-found')}
        </Page>
    )
  }

  return (
      <DynamicModuleLoader reducers={initialReducer}>
          <Page className={classNames(styles.articleDetailsPage, [className])}>
              <Button onClick={onBackToList}>{t('buttons:back-to-list')}</Button>
              <ArticleDetails articleId={articleId}/>
              {articleError === undefined &&
              <>
                  <Text title={t('comments:comments')} className={styles.commentTitle} size={TextSize.S}/>
                  <AddCommentForm onSend={onSendComment}/>
                  <CommentList
                    comments={comments}
                    isLoading={commentsisLoading}
                  />
              </>}

          </Page>
      </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
