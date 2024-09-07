import { Card } from '6shared/ui/Card/Card'
import styles from '../../styles.module.scss'
import { memo } from 'react'
import { Text } from '6shared/ui/Text/Text'
import { type Article } from '../../../../model/types/article'

interface TileViewProps {
  article: Article
  types: JSX.Element
  views: JSX.Element
  onOpenArticle: () => void
}

export const TileView = memo(function TileView
({ article, types, views, onOpenArticle }: TileViewProps): JSX.Element {
  return (
      <Card className={styles.card} onClick={onOpenArticle}>
          <div className={styles.imageWrapper}>
              <img src={article.img} alt={article.title} className={styles.img}/>
              <Text text={article.createdAt} className={styles.date}/>
          </div>
          <div className={styles.infoWrapper}>
              {types}
              {views}
          </div>
          <Text text={article.title} className={styles.title}/>
      </Card>
  )
})
