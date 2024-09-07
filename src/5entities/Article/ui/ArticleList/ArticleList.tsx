import { classNames } from '6shared/lib/classNames/classNames'
import styles from './ArticleList.module.scss'
import { memo } from 'react'
import { ArticleView, type Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ListItemSkeleton/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

const getSkeleton = (view: ArticleView): JSX.Element[] => new Array(view === ArticleView.LIST ? 3 : 9)
  .fill(0)
  .map((_, index) =>
      <ArticleListItemSkeleton key={index} view={view} className={styles.card}/>
  )

const getArticles = (articles: Article[], view: ArticleView): JSX.Element[] | null =>
  articles.length > 0
    ? articles.map((article) => (
        <ArticleListItem key={article.id} article={article} view={view} className={styles.card}/>
    ))
    : null

export const ArticleList = memo(function ArticleList
({ className, articles, isLoading, view = ArticleView.TILE }: ArticleListProps): JSX.Element {
  return (
      <div className={classNames(styles.articleList, [className, styles[view]])}>
          {isLoading === true
            ? getSkeleton(view)
            : getArticles(articles, view)}
      </div>
  )
})
