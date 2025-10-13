import styles from './ArticleTextBlock.module.scss'
import { type JSX, memo } from 'react'
import { type ArticleTextBlock as ArticleTextBlockType } from '../../model/types/article'
import { Text } from '@/6shared/ui/deprecated/Text'

interface ArticleTextBlockProps {
    className?: string
    block: ArticleTextBlockType
}

export const ArticleTextBlock = memo(function ArticleTextBlock({
    className,
    block,
}: ArticleTextBlockProps): JSX.Element {
    return (
        <div className={className}>
            {block.title && (
                <Text
                    title={block.title}
                    className={styles.title}
                />
            )}

            {block.paragraphs.map((paragraph, index) => (
                <Text
                    text={paragraph}
                    className={styles.paragraph}
                    key={index}
                />
            ))}
        </div>
    )
})
