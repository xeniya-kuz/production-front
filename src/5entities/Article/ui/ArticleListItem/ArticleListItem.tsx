import EyeIcon from '6shared/assets/icons/eye-20-20.svg'
import { routePaths } from '6shared/config/routeConfig/routeConfig'
import { classNames } from '6shared/lib/classNames/classNames'
import { Icon } from '6shared/ui/Icon/Icon'
import { Text } from '6shared/ui/Text/Text'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArticleView, type Article } from '../../model/types/article'
import styles from './styles.module.scss'
import { ListView } from './ListItemView/List/ListView'
import { TileView } from './ListItemView/Tile/TileView'

interface ArticleListItemProps {
  className?: string
  article: Article
  view?: ArticleView
}

export const ArticleListItem = memo(function ArticleItem
({ className, article, view = ArticleView.TILE }: ArticleListItemProps): JSX.Element {
  const navigate = useNavigate()

  const types = <Text text={article.type.join(', ')} className={styles.types}/>
  const views = <>
      <Text text={String(article.views)} className={styles.views}/>
      <Icon Svg={EyeIcon}/>
  </>

  const onOpenArticle = useCallback(() => {
    navigate(`${routePaths['article-details']}/${article.id}`)
  }, [navigate, article.id])

  return (
      <div className={classNames(styles.articleListItem, [className, styles[view]])}>
          {view === ArticleView.LIST
            ? <ListView article={article} types={types} views={views} onOpenArticle={onOpenArticle}/>
            : <TileView article={article} types={types} views={views} onOpenArticle={onOpenArticle}/>
          }
      </div>
  )
})
