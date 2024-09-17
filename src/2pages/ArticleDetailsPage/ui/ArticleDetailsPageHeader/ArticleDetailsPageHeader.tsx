import { classNames } from '6shared/lib/classNames/classNames'
import styles from './ArticleDetailsPageHeader.module.scss'
import { memo, useCallback } from 'react'
import { Button } from '6shared/ui/Button/Button'
import { routePaths } from '6shared/config/routeConfig/routeConfig'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { selectIsArticleAuthor } from '../../model/selectors/comments/article/article'
import { selectArticleDetails } from '5entities/Article'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo(function ArticleDetailsPageHeader
({ className }: ArticleDetailsPageHeaderProps): JSX.Element {
  const { t } = useTranslation('buttons')
  const navigate = useNavigate()
  const isAuthor = useSelector(selectIsArticleAuthor)
  const article = useSelector(selectArticleDetails)

  const onBackToList = useCallback(() => {
    navigate(routePaths.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    if (article !== undefined) {
      navigate(`${routePaths.articles}/${article?.id}/edit`)
    }
  }, [navigate, article])

  return (
      <div className={classNames(styles.articleDetailsPageHeader, [className])}>
          <Button onClick={onBackToList}>{t('back-to-list')}</Button>
          {isAuthor && <Button onClick={onEditArticle} className={styles.editBtn}>{t('edit')}</Button>}
      </div>
  )
})
