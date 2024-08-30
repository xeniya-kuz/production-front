import { classNames } from '6shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleDetails } from '5entities/Article'
import { useParams } from 'react-router-dom'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps): JSX.Element => {
  const { t } = useTranslation('article')
  const { acticleId } = useParams<{ acticleId: string }>()

  if (acticleId === undefined) {
    return (
        <div className={classNames(undefined, [className])}>
            { t('article-not-found')}
        </div>
    )
  }
  return (
      <div className={classNames(undefined, [className])}>
          <ArticleDetails articleId={acticleId}/>
      </div>
  )
}

export default memo(ArticleDetailsPage)
