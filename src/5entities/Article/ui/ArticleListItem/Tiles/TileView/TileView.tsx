import { routePaths } from '6shared/config/routeConfig/routeConfig'
import { AppLink } from '6shared/ui/AppLink/AppLink'
import { Card } from '6shared/ui/Card/Card'
import { Icon, IconColors } from '6shared/ui/Icon/Icon'
import { Text } from '6shared/ui/Text/Text'
import { type HTMLAttributeAnchorTarget, type JSX, memo } from 'react'
import { type Article } from '../../../../model/types/article'
import styles from '../styles.module.scss'

import EyeIcon from '6shared/assets/icons/eye-20-20.svg'
import { ARTICLE_VIEW_ITEM_INDEX_LOCALSTORAGE_KEY } from '6shared/const/localstorage'

interface TileViewProps {
  article: Article
  target?: HTMLAttributeAnchorTarget
  className?: string
  index: number
}

export const TileView = memo(function TileView
({ article, target, className, index }: TileViewProps): JSX.Element {
  // вынести
  const types = <Text text={article.type.join(', ')} className={styles.types}/>
  const views = <>
      <Text text={String(article.views)} className={styles.views}/>
      <Icon Svg={EyeIcon} color={[IconColors.SECONDARY_STROKE, IconColors.SECONDARY_FILL]}/>
  </>

  const handleButtonClick = (): void => {
    localStorage.setItem(ARTICLE_VIEW_ITEM_INDEX_LOCALSTORAGE_KEY, JSON.stringify(index))
  }

  return (
      <AppLink
          to={`${routePaths['article-details']}/${article.id}`}
          target={target}
          className={className}
          onClick={handleButtonClick}
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
