import { Card } from '6shared/ui/Card/Card'
import styles from '../../styles.module.scss'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { Text } from '6shared/ui/Text/Text'
import { type Article } from '../../../../model/types/article'
import { routePaths } from '6shared/config/routeConfig/routeConfig'
import { AppLink } from '6shared/ui/AppLink/AppLink'

interface TileViewProps {
  article: Article
  types: JSX.Element
  views: JSX.Element
  target?: HTMLAttributeAnchorTarget
}

export const TileView = memo(function TileView
({ article, types, views, target }: TileViewProps): JSX.Element {
  return (
      <AppLink
       to={`${routePaths['article-details']}/${article.id}`}
       target={target}
      >
          <Card className={styles.card}>
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
      </AppLink>
  )
})
