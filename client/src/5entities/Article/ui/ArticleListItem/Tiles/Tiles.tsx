import { classNames } from '@/6shared/lib/classNames/classNames'
import { useInitialEffect } from '@/6shared/lib/hooks'
import { Card } from '@/6shared/ui/Card/Card'
import { type FC, type HTMLAttributeAnchorTarget, memo, useCallback, useRef, type JSX } from 'react'
import { VirtuosoGrid, type VirtuosoGridHandle } from 'react-virtuoso'
import { type Article } from '../../../model/types/article'
import { SkeletonTileView } from './Skeleton/SkeletonTileView'
import { TileView } from './TileView/TileView'
import styles from './styles.module.scss'

interface TilesProps {
  className?: string
  articles: Article[]
  onLoadNextArticles?: () => void
  Header?: () => JSX.Element
  target?: HTMLAttributeAnchorTarget
  selectedArticleId: number
  isLoading?: boolean
  virtualized?: boolean
}

export const Tiles = memo(function Tiles
(props: TilesProps): JSX.Element {
  const { className, articles, Header, onLoadNextArticles, target, selectedArticleId, isLoading, virtualized } = props
  const virtuosoGridRef = useRef<VirtuosoGridHandle>(null)

  const timeout = useCallback(() => {
    setTimeout(() => {
      if (virtuosoGridRef.current !== null) {
        virtuosoGridRef.current.scrollToIndex(selectedArticleId)
      } else {
        timeout()
      }
    }, 1000)
  }, [selectedArticleId])

  const renderArticle = (index: number, article: Article): JSX.Element =>
      <TileView article={article} target={target} className={styles.tile} index={index} key={index}/>

  useInitialEffect(() => {
    timeout()
  })

  const Skeleton: FC = () => (
      <Card className={styles.card}>
          <SkeletonTileView/>
      </Card>
  )

  if (isLoading === true) {
    return (
        <>
            {Header !== undefined && <Header/>}
            <div className={classNames(styles.tiles, [className])}>
                {new Array(9).fill(0).map((_, index) => <Skeleton key={index}/>)}
            </div>
        </>
    )
  }

  if (virtualized === true) {
    return (
        <div className={classNames(styles.tilesContainer, [className])}>
            <VirtuosoGrid
                style={{ width: '100%' }}
                ref={virtuosoGridRef}
                totalCount={articles.length}
                // skeleton подставляется на каждый элемент
                components={{ Header, ScrollSeekPlaceholder: Skeleton }}
                // эта строчка вызывает Warning: Can't perform a React state update on an unmounted component
                endReached={onLoadNextArticles}
                data={articles}
                itemContent={renderArticle}
                listClassName={styles.tiles}
                scrollSeekConfiguration={{
                  enter: (velocity) => Math.abs(velocity) > 200,
                  exit: (velocity) => Math.abs(velocity) < 30
                }}
       />
        </div>
    )
  }

  return (
      <div className={classNames(styles.tilesContainer, [className])}>
          {Header !== undefined && <Header/>}
          <div className={styles.tiles}>
              {articles.map((article, index) => renderArticle(index, article))}
          </div>
      </div>
  )
})
