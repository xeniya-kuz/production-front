import EyeIcon from '6shared/assets/icons/eye-20-20.svg'
import { classNames } from '6shared/lib/classNames/classNames'
import { Icon, IconColors } from '6shared/ui/Icon/Icon'
import { Text } from '6shared/ui/Text/Text'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { ArticleView, type Article } from '../../model/types/article'
import { ListView } from './ListItemView/List/ListView'
import { TileView } from './ListItemView/Tile/TileView'
import styles from './styles.module.scss'

interface ArticleListItemProps {
  className?: string
  article: Article
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo(function ArticleItem
({ className, article, view = ArticleView.TILE, target }: ArticleListItemProps): JSX.Element {
  const types = <Text text={article.type.join(', ')} className={styles.types}/>
  const views = <>
      <Text text={String(article.views)} className={styles.views}/>
      <Icon Svg={EyeIcon} color={[IconColors.SECONDARY_STROKE, IconColors.SECONDARY_FILL]}/>
  </>

  return (
      <div className={classNames(styles.articleListItem, [className, styles[view]])}>
          {view === ArticleView.LIST
            ? <ListView article={article} types={types} views={views} target={target}/>
            : <TileView article={article} types={types} views={views} target={target}/>
          }
      </div>
  )
})
