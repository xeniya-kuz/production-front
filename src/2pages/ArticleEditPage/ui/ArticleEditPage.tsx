import { classNames } from '6shared/lib/classNames/classNames'
import { memo } from 'react'
import { Page } from '3widgets/Page'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage =
({ className }: ArticleEditPageProps): JSX.Element => {
  const { t } = useTranslation('articles')
  const { articleId } = useParams<{ articleId: string }>()
  const isEdit = Boolean(articleId)

  return (
      <Page className={classNames(undefined, [className])}>
          {isEdit ? t('article-edition') : t('article-creation')}
      </Page>
  )
}

export default memo(ArticleEditPage)
