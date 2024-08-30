import { classNames } from '6shared/lib/classNames/classNames'
import styles from './ArticleImageBlock.module.scss'
import { memo } from 'react'
import { type ArticleImageBlock as ArticleImageBlockType } from '../../model/types/article'
import { Text, TextAlign, TextSize } from '6shared/ui/Text/Text'

interface ArticleImageBlockProps {
  className?: string
  block: ArticleImageBlockType
}

export const ArticleImageBlock = memo(function ArticleImageBlock ({ className, block }: ArticleImageBlockProps): JSX.Element {
  return (
      <div className={classNames(styles.articleimageblock, [className])}>
          <img src={block.src} className={styles.img} alt={block.title}/>
          {block.title !== undefined &&
          <Text text={block.title} align={TextAlign.CENTER} size={TextSize.S} />}
      </div>
  )
})
