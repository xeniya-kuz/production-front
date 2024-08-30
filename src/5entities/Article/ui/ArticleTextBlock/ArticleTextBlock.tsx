import styles from './ArticleTextBlock.module.scss'
import { memo } from 'react'
import { type ArticleTextBlock as ArticleTextBlockType } from '../../model/types/article'
import { Text } from '6shared/ui/Text/Text'

interface ArticleTextBlockProps {
  className?: string
  block: ArticleTextBlockType
}

export const ArticleTextBlock = memo(function ArticleTextBlock ({ className, block }: ArticleTextBlockProps): JSX.Element {
  return (
      <div className={className}>
          {block.title !== undefined && (
          <Text title={block.title} className={styles.title}/>
          )}

          {block.paragraphs.map((paragraph, index) =>
              <Text text={paragraph} className={styles.paragraph} key={index}/>
          )}

      </div>
  )
})
