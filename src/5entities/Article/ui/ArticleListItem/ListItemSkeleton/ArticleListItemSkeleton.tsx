import { classNames } from '6shared/lib/classNames/classNames'
import { ArticleView } from '../../../model/types/article'
import styles from '../styles.module.scss'
import { memo } from 'react'
import { Card } from '6shared/ui/Card/Card'
import { SkeletonListView } from './List/SkeletonListView'
import { SkeletonTileView } from './Tile/SkeletonTileView'

interface ArticleListItemSkeletonProps {
  className?: string
  view?: ArticleView
}

export const ArticleListItemSkeleton = memo(function ArticleListItemSkeleton
({ className, view = ArticleView.TILE }: ArticleListItemSkeletonProps): JSX.Element {
  return (
      <div className={classNames(styles.articleListItem, [className, styles[view]])}>
          <Card className={styles.card}>
              {view === ArticleView.LIST
                ? <SkeletonListView/>
                : <SkeletonTileView/>
              }
          </Card>
      </div>
  )
})
