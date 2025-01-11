import { routePaths } from '6shared/config/routeConfig/routeConfig'
import { ARTICLE_LIST_ITEM_INDEX_LOCALSTORAGE_KEY } from '6shared/const/localstorage'
import { classNames } from '6shared/lib/classNames/classNames'
import { AppLink } from '6shared/ui/AppLink/AppLink'
import { Avatar } from '6shared/ui/Avatar/Avatar'
import { Button } from '6shared/ui/Button/Button'
import { Card } from '6shared/ui/Card/Card'
import { Icon, IconColors } from '6shared/ui/Icon/Icon'
import { Text } from '6shared/ui/Text/Text'
import { type JSX, memo, type HTMLAttributeAnchorTarget } from 'react'
import { useTranslation } from 'react-i18next'
import { type Article, type ArticleTextBlock as ArticleTextBlockType } from '../../../../model/types/article'
import { ArticleTextBlock } from '../../../ArticleTextBlock/ArticleTextBlock'
import styles from './ListView.module.scss'

import EyeIcon from '6shared/assets/icons/eye-20-20.svg'
import { ArticleBlockType } from '5entities/Article/model/const/article'

interface ListViewProps {
  article: Article
  target?: HTMLAttributeAnchorTarget
  index: number
  className?: string
}

export const ListView = memo(function ListView
({ article, target, index, className }: ListViewProps): JSX.Element {
  const { t } = useTranslation('buttons')
  // вынести
  const types = <Text text={article.type.join(', ')} className={styles.types}/>
  const views = <>
      <Text text={String(article.views)} className={styles.views}/>
      <Icon Svg={EyeIcon} color={[IconColors.SECONDARY_STROKE, IconColors.SECONDARY_FILL]}/>
  </>

  const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlockType

  const handleButtonClick = (): void => {
    localStorage.setItem(ARTICLE_LIST_ITEM_INDEX_LOCALSTORAGE_KEY, JSON.stringify(index))
  }

  return (
      <Card className={classNames(styles.card, [className])} >
          <div className={styles.header}>
              {/* eslint-disable-next-line i18next/no-literal-string */}
              <Avatar size={30} src={article.user?.avatar} alt='avatar'/>
              <Text text={article.user?.username} className={styles.username}/>
              <Text text={article.createdAt} className={styles.date}/>
          </div>
          <Text title={article.title} className={styles.title}/>
          {types}
          <img src={article.img} alt={article.title} className={styles.img}/>
          {textBlock !== undefined && (
              <ArticleTextBlock block={textBlock} className={styles.textBlock}/>
          )}
          <div className={styles.footer}>
              <AppLink
                  to={`${routePaths['article-details']}/${article.id}`}
                  target={target}
              >
                  <Button onClick={handleButtonClick}>
                      {t('read-more')}
                  </Button>
              </AppLink>

              {views}
          </div>
      </Card>
  )
})
