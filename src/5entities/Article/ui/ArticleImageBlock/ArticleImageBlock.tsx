import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './ArticleImageBlock.module.scss'
import { type JSX, memo } from 'react'
import { type ArticleImageBlock as ArticleImageBlockType } from '../../model/types/article'
import {
    Text as TextDeprecated,
    TextAlign,
    TextSize,
} from '@/6shared/ui/deprecated/Text'
import { ToggleFeatures } from '@/6shared/lib/features'
import { Text } from '@/6shared/ui/redesigned/Text'

interface ArticleImageBlockProps {
    className?: string
    block: ArticleImageBlockType
}

export const ArticleImageBlock = memo(function ArticleImageBlock({
    className,
    block,
}: ArticleImageBlockProps): JSX.Element {
    return (
        <div className={classNames(styles.articleImageblock, [className])}>
            <img
                src={block.src}
                className={styles.img}
                alt={block.title}
            />
            {block.title && (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Text
                            text={block.title}
                            align="center"
                            size="s"
                        />
                    }
                    off={
                        <TextDeprecated
                            text={block.title}
                            align={TextAlign.CENTER}
                            size={TextSize.S}
                        />
                    }
                />
            )}
        </div>
    )
})
