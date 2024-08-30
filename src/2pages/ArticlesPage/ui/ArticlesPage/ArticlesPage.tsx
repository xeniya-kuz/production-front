import { classNames } from '6shared/lib/classNames/classNames'
import styles from './ArticlesPage.module.scss'
import { memo } from 'react'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps): JSX.Element => {
  return (
      // eslint-disable-next-line i18next/no-literal-string
      <main className={classNames(styles.articlesPage, [className])}>
          ArticlesPage
      </main>
  )
}

export default memo(ArticlesPage)
