import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './styles.module.scss'
import { type JSX, memo, useCallback } from 'react'
import { Avatar } from '@/6shared/ui/deprecated/Avatar'
import CalendarIcon from '@/6shared/assets/icons/calendar-20-20.svg'
import EyeIcon from '@/6shared/assets/icons/eye-20-20.svg'
import { Icon } from '@/6shared/ui/deprecated/Icon'
import { Text, TextSize } from '@/6shared/ui/deprecated/Text'
import {
    type ArticleBlock,
    type Article as ArticleType,
} from '../../model/types/article'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack'
import { ArticleBlockType } from '../../model/const/article'
import { DATA_TEST_ID } from '@/6shared/const/tests'

interface ArticleProps {
    className?: string
    article: ArticleType
}

export const Article = memo(function Article({
    className,
    article,
}: ArticleProps): JSX.Element {
    const articleInfo = [
        {
            icon: EyeIcon,
            text: String(article?.views),
        },
        {
            icon: CalendarIcon,
            text: article?.createdAt,
        },
    ]

    console.log('article 2', article)

    const renderBlock = useCallback((block: ArticleBlock) => {
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
    }, [])

    return (
        <article
            className={classNames(styles.article, [className])}
            data-testid={DATA_TEST_ID.article}
        >
            <HStack
                justify="center"
                max
            >
                <Avatar
                    size={200}
                    src={article?.img}
                    alt={article?.title}
                    className={styles.avatar}
                />
            </HStack>
            <VStack
                gap="4"
                max
                data-testid={DATA_TEST_ID.articleInfo}
            >
                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                {articleInfo.map((info, index) => (
                    <HStack
                        gap="8"
                        key={index}
                    >
                        <Icon Svg={info.icon} />
                        <Text text={info.text} />
                    </HStack>
                ))}
            </VStack>
            {article?.blocks.map(renderBlock)}
        </article>
    )
})
