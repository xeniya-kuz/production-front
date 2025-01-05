import { classNames } from '6shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails } from '5entities/Article'
import { useParams } from 'react-router-dom'
import { Text, TextSize } from '6shared/ui/Text/Text'
import { CommentList } from '5entities/Comment'
import styles from './ArticleDetailsPage.module.scss'
import { DynamicModuleLoader, type ReducerList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducer, selectArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { selectArticleCommentsIsLoading } from '../../model/selectors/comments/comments'
import { useInitialEffect, useAppDispatch } from '6shared/lib/hooks'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from '4features/AddCommentForm'
import { addArticleComment } from '../../model/services/addArticleComment/addArticleComment'
import { selectArticleDetailsError } from '5entities/Article/model/selectors/selectArticleDetailsError/selectArticleDetailsError'
import { Page } from '3widgets/Page'
import { ArticleRecommendations } from '4features/ArticleRecommendations'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { VStack } from '6shared/ui/Stack'

interface ArticleDetailsPageProps {
  className?: string
}

const initialReducer: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation(['comments', 'buttons', 'articles'])
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
              <ArticleDetailsPageHeader/>
              <ArticleDetails articleId={articleId}/>
              {articleError === undefined &&
                  <>
                      <Text title={t('articles:recommendations')} size={TextSize.S}/>
                      <ArticleRecommendations/>
                      <Text title={t('comments:comments')} size={TextSize.S}/>
                      <VStack gap='16' max>
                          <AddCommentForm onSend={onSendComment}/>
                          <CommentList
                              comments={comments}
                              isLoading={commentsisLoading}
                  />
                      </VStack>
                  </>}

          </Page>
      </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
