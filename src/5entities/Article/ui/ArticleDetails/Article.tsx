import { classNames } from '6shared/lib/classNames/classNames'
import styles from './styles.module.scss'
import { memo, useCallback } from 'react'
import { Avatar } from '6shared/ui/Avatar/Avatar'
import CalendarIcon from '6shared/assets/icons/calendar-20-20.svg'
import EyeIcon from '6shared/assets/icons/eye-20-20.svg'
import { Icon } from '6shared/ui/Icon/Icon'
import { Text, TextSize } from '6shared/ui/Text/Text'
import { ArticleBlockType, type ArticleBlock, type Article as ArticleType } from '../../model/types/article'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'

interface ArticleProps {
  className?: string
  article: ArticleType
}

export const Article = memo(function Article
({ className, article }: ArticleProps): JSX.Element {
  const articleInfo = [
    {
      icon: EyeIcon,
      text: String(article?.views)

    },
    {
      icon: CalendarIcon,
      text: article?.createdAt

    }
  ]

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlock key={block.id} className={styles.block} block={block}/>
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlock key={block.id} className={styles.block} block={block}/>
      case ArticleBlockType.TEXT:
        return <ArticleTextBlock key={block.id} className={styles.block} block={block}/>
      default:
        return null
    }
  }, [])

  return (
      <article className={classNames(styles.article, [className])}>
          <div className={styles.avatarWrapper}>
              <Avatar size={200} src={article?.img} alt={article?.title} className={styles.avatar}/>
          </div>
          <Text title={article?.title} text={article?.subtitle} size={TextSize.L}/>
          {articleInfo.map((info, index) => (
              <div className={styles.articleInfo} key={index}>
                  <Icon Svg={info.icon} className={styles.icon}/>
                  <Text text={info.text}/>
              </div>
          ))}
          {article?.blocks.map(renderBlock)}

      </article>
  )
})
