import { classNames } from '6shared/lib/classNames/classNames'
import styles from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps): JSX.Element => {
  const { t } = useTranslation('article')
  return (
      <div className={classNames(styles.articledetailspage, [className])}>
          ArticleDetailsPage
      </div>
  )
}

export default memo(ArticleDetailsPage)
