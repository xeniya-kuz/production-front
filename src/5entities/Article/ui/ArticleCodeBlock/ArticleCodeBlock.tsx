import { classNames } from '6shared/lib/classNames/classNames'
import styles from './ArticleCodeBlock.module.scss'
import { memo } from 'react'
import { type ArticleCodeBlock as ArticleCodeBlockType } from '../../model/types/article'
import { Code } from '6shared/ui/Code/Code'

interface ArticleCodeBlockProps {
  className?: string
  block: ArticleCodeBlockType
}

export const ArticleCodeBlock = memo(function ArticleCodeBlock ({ className, block }: ArticleCodeBlockProps): JSX.Element {
  return (
      <div className={classNames(styles.articleCodeBlock, [className])}>
          <Code code={block.code}/>
      </div>
  )
})
