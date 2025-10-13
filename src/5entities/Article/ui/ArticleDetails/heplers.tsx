import { type JSX } from 'react'
import { type ArticleBlock } from '../../model/types/article'
import { ArticleBlockType } from '../../model/const/article'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'

export const renderArticleBlock = (block: ArticleBlock): JSX.Element | null => {
    switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlock
                    key={block.id}
                    block={block}
                />
            )
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlock
                    key={block.id}
                    block={block}
                />
            )
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlock
                    key={block.id}
                    block={block}
                />
            )
        default:
            return null
    }
}
