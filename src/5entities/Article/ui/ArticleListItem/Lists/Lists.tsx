import { classNames } from '6shared/lib/classNames/classNames'

import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { ListView } from './ListView/ListView'
import { Footer } from './Footer'
import styles from './styles.module.scss'
import { type Article } from '../../../model/types/article'

interface ListsProps {
  className?: string
  articles: Article[]
  onLoadNextArticles?: () => void
  Header: () => JSX.Element
  target?: HTMLAttributeAnchorTarget
  selectedArticleId: number
  isLoading?: boolean
}

export const Lists = memo(function Lists
({ className, articles, onLoadNextArticles, Header, target, selectedArticleId, isLoading }: ListsProps): JSX.Element {
  const renderArticle = (index: number, article: Article): JSX.Element => <ListView article={article} target={target} index={index} className={styles.list}/>

  const components = { Header, Footer: () => <Footer isLoading={isLoading} /> }

  return (
      <Virtuoso
          data={articles}
          itemContent={renderArticle}
          endReached={onLoadNextArticles}
          initialTopMostItemIndex={selectedArticleId}
          components={components}
          className={classNames(undefined, [className])}
      />

  )
})
