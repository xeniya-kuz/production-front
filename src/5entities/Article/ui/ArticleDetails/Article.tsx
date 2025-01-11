import { classNames } from '6shared/lib/classNames/classNames'
import styles from './styles.module.scss'
import { type JSX, memo, useCallback } from 'react'
import { Avatar } from '6shared/ui/Avatar/Avatar'
import CalendarIcon from '6shared/assets/icons/calendar-20-20.svg'
import EyeIcon from '6shared/assets/icons/eye-20-20.svg'
import { Icon } from '6shared/ui/Icon/Icon'
import { Text, TextSize } from '6shared/ui/Text/Text'
import { type ArticleBlock, type Article as ArticleType } from '../../model/types/article'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import { HStack, VStack } from '6shared/ui/Stack'
import { ArticleBlockType } from '../../model/const/article'

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
        return <ArticleCodeBlock key={block.id} block={block}/>
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlock key={block.id} block={block}/>
      case ArticleBlockType.TEXT:
        return <ArticleTextBlock key={block.id} block={block}/>
      default:
        return null
    }
  }, [])

  return (
      <article className={classNames(styles.article, [className])}>
          <HStack justify='center' max>
              <Avatar size={200} src={article?.img} alt={article?.title} className={styles.avatar}/>
          </HStack>
          <VStack gap='4' max>
              <Text title={article?.title} text={article?.subtitle} size={TextSize.L}/>
              {articleInfo.map((info, index) => (
                  <HStack gap='8' key={index}>
                      <Icon Svg={info.icon}/>
                      <Text text={info.text}/>
                  </HStack>
              ))}
          </VStack>
          {article?.blocks.map(renderBlock)}

      </article>
  )
})
