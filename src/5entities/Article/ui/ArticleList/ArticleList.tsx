import { ArticlesPageFilters, selectArticlesView } from '4features/ArticlesPageFilters'
import { ARTICLE_LIST_ITEM_INDEX_LOCALSTORAGE_KEY, ARTICLE_VIEW_ITEM_INDEX_LOCALSTORAGE_KEY } from '6shared/const/localstorage'
import { classNames } from '6shared/lib/classNames/classNames'
import { Text } from '6shared/ui/Text/Text'
import { type HTMLAttributeAnchorTarget, memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { type Article, ArticleView } from '../../model/types/article'
import { Lists } from '../ArticleListItem/Lists/Lists'
import { Tiles } from '../ArticleListItem/Tiles/Tiles'
import styles from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  target?: HTMLAttributeAnchorTarget
  onLoadNextArticles?: () => void
  view: ArticleView
}

export const ArticleList = memo(function ArticleList
({ className, articles, isLoading, target, onLoadNextArticles, view }: ArticleListProps): JSX.Element {
  const { t } = useTranslation('articles')
  const [selectedArticleId, setSelectedArticleId] = useState(0)

  const Header = (): JSX.Element => <ArticlesPageFilters className={styles.header}/>

  useEffect(() => {
    const articleListIndex = localStorage.getItem(ARTICLE_LIST_ITEM_INDEX_LOCALSTORAGE_KEY) ?? 0
    const articleViewIndex = localStorage.getItem(ARTICLE_VIEW_ITEM_INDEX_LOCALSTORAGE_KEY) ?? 0
    setSelectedArticleId(view === ArticleView.LIST ? +articleListIndex : +articleViewIndex)
  }, [view])

  if (isLoading !== true && (articles.length === 0)) {
    return (
        <div className={classNames(styles.articleList, [className])}>
            <Text title={t('articles-not-found')}/>
        </div>
    )
  }

  return (
      <div className={classNames(styles.articleList, [className])}>
          {view === ArticleView.LIST
            ? <Lists Header={Header} articles={articles} onLoadNextArticles={onLoadNextArticles} selectedArticleId={selectedArticleId} isLoading={isLoading} target={target}/>
            : <Tiles Header={Header} articles={articles} onLoadNextArticles={onLoadNextArticles} selectedArticleId={selectedArticleId} isLoading={isLoading} target={target}/>
         }
      </div>
  )
})
