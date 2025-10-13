import styles from './ArticleTextBlock.module.scss'
import { type JSX, memo } from 'react'
import { type ArticleTextBlock as ArticleTextBlockType } from '../../model/types/article'
import { Text as TextDeprecated } from '@/6shared/ui/deprecated/Text'
import { Text as TextRedesigned } from '@/6shared/ui/redesigned/Text'
import { ToggleFeatures } from '@/6shared/lib/features'

interface ArticleTextBlockProps {
    className?: string
    block: ArticleTextBlockType
}

export const ArticleTextBlock = memo(function ArticleTextBlock({
    className,
    block,
}: ArticleTextBlockProps): JSX.Element {
    const Text = (props: {
        title?: string
        className: string
        text?: string
    }): JSX.Element => (
        <ToggleFeatures
            feature="isAppRedesigned"
            // TODO: надо переделать размеры текста, т.к. сейчас заголовки вставляются как h2, а должны быть h3
            on={<TextRedesigned {...props} />}
            off={<TextDeprecated {...props} />}
        />
    )

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
