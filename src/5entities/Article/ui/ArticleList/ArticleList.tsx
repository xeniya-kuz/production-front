import { classNames } from '6shared/lib/classNames/classNames'
import styles from './ArticleList.module.scss'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { ArticleView, type Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ListItemSkeleton/ArticleListItemSkeleton'
import { useSelector } from 'react-redux'
import { selectArticlesView } from '4features/ArticlesPageFilters'
import { useTranslation } from 'react-i18next'
import { Text } from '6shared/ui/Text/Text'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  target?: HTMLAttributeAnchorTarget
}

const getSkeleton = (view: ArticleView): JSX.Element[] => new Array(view === ArticleView.LIST ? 3 : 9)
  .fill(0)
  .map((_, index) =>
      <ArticleListItemSkeleton key={index} view={view} className={styles.card}/>
  )

const getArticles = (articles: Article[], view: ArticleView, target?: HTMLAttributeAnchorTarget): JSX.Element[] | null =>
  articles.length > 0
    ? articles.map((article) => (
        <ArticleListItem key={article.id} article={article} view={view} className={styles.card} target={target}/>
    ))
    : null

export const ArticleList = memo(function ArticleList
({ className, articles, isLoading, target }: ArticleListProps): JSX.Element {
  const view = useSelector(selectArticlesView)
  const { t } = useTranslation('articles')

  if (isLoading !== true && (articles.length === 0)) {
    return (
        <div className={classNames(styles.articleList, [className, styles[view]])}>
            <Text title={t('articles-not-found')}/>
        </div>
    )
  }

  return (
      <div className={classNames(styles.articleList, [className, styles[view]])}>
          {getArticles(articles, view, target)}
          {Boolean(isLoading) && getSkeleton(view)}
      </div>
  )
})
