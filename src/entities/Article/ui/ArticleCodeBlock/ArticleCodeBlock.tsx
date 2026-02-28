import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleCodeBlock.module.scss'
import { type JSX, memo } from 'react'
import { type ArticleCodeBlock as ArticleCodeBlockType } from '../../model/types/article'
import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code'
import { ToggleFeatures } from '@/shared/lib/features'
import { Code } from '@/shared/ui/redesigned/Code'

interface ArticleCodeBlockProps {
    className?: string
    block: ArticleCodeBlockType
}

export const ArticleCodeBlock = memo(function ArticleCodeBlock({
    className,
    block,
}: ArticleCodeBlockProps): JSX.Element {
    return (
        <div className={classNames(styles.articleCodeBlock, [className])}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Code code={block.code} />}
                off={<CodeDeprecated code={block.code} />}
            />
        </div>
    )
})
