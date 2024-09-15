import styles from '../../styles.module.scss'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { ArticleBlockType, type Article, type ArticleTextBlock as ArticleTextBlockType } from '../../../../model/types/article'
import { Avatar } from '6shared/ui/Avatar/Avatar'
import { Text } from '6shared/ui/Text/Text'
import { ArticleTextBlock } from '../../../ArticleTextBlock/ArticleTextBlock'
import { Button } from '6shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { Card } from '6shared/ui/Card/Card'
import { AppLink } from '6shared/ui/AppLink/AppLink'
import { routePaths } from '6shared/config/routeConfig/routeConfig'

interface ListViewProps {
  article: Article
  types: JSX.Element
  views: JSX.Element
  target?: HTMLAttributeAnchorTarget
}

export const ListView = memo(function ListView
({ article, types, views, target }: ListViewProps): JSX.Element {
  const { t } = useTranslation('buttons')

  const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlockType

  return (
      <Card className={styles.card} >
          <div className={styles.header}>
              {/* eslint-disable-next-line i18next/no-literal-string */}
              <Avatar size={30} src={article.user.avatar} alt='avatar'/>
              <Text text={article.user.username} className={styles.username}/>
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
                  <Button>
                      {t('read-more')}
                  </Button>
              </AppLink>

              {views}
          </div>
      </Card>
  )
})
