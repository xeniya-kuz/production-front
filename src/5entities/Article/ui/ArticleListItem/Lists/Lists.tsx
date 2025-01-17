import { classNames } from '@/6shared/lib/classNames/classNames'

import { type HTMLAttributeAnchorTarget, memo, type JSX } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { ListView } from './ListView/ListView'
import { Footer } from './Footer'
import styles from './styles.module.scss'
import { type Article } from '../../../model/types/article'

interface ListsProps {
  className?: string
  articles: Article[]
  onLoadNextArticles?: () => void
  Header?: () => JSX.Element
  target?: HTMLAttributeAnchorTarget
  selectedArticleId: number
  isLoading?: boolean
  virtualized?: boolean
}

export const Lists = memo(function Lists
(props: ListsProps): JSX.Element {
  const { className, articles, onLoadNextArticles, Header, target, selectedArticleId, isLoading, virtualized } = props

  const renderArticle = (index: number, article: Article): JSX.Element => <ListView article={article} target={target} index={index} className={styles.list}/>

  const components = { Header, Footer: () => <Footer isLoading={isLoading} /> }

  if (virtualized === true) {
      <Virtuoso
          data={articles}
          itemContent={renderArticle}
          endReached={onLoadNextArticles}
          initialTopMostItemIndex={selectedArticleId}
          components={components}
          className={classNames(undefined, [className])}
/>
  }

  if (isLoading === true) {
    return (
        <>
            {Header !== undefined && <Header/>}
            <Footer/>
        </>
    )
  }

  return (
      <div className={classNames(styles.tilesContainer, [className])}>
          {Header !== undefined && <Header/>}
          {articles.map((article, index) => renderArticle(index, article))}
      </div>
  )
})
