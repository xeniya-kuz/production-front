import CalendarIconDeprecated from '@/6shared/assets/icons/calendar-20-20.svg'
import EyeIconDeprecated from '@/6shared/assets/icons/eye-20-20.svg'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/6shared/lib/features'
import { Avatar as AvatarDeprecated } from '@/6shared/ui/deprecated/Avatar'
import { Icon as IconDeprecated } from '@/6shared/ui/deprecated/Icon'
import { Text as TextDeprecated, TextSize } from '@/6shared/ui/deprecated/Text'
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack'
import { type FC, type JSX, memo } from 'react'
import { type Article as ArticleType } from '../../model/types/article'
import { renderArticleBlock } from './heplers'
import styles from './styles.module.scss'
import { Text } from '@/6shared/ui/redesigned/Text'
import { AppImage } from '@/6shared/ui/redesigned/AppImage'

interface ArticleProps {
    className?: string
    article: ArticleType
}

export const Article = memo(function Article({
    className,
    article,
}: ArticleProps): JSX.Element {
    const Deprecated: FC = () => {
        const articleInfo = [
            {
                icon: EyeIconDeprecated,
                text: String(article?.views),
            },
            {
                icon: CalendarIconDeprecated,
                text: article?.createdAt,
            },
        ]

        return (
            <div className={styles.articleDeprecated}>
                <HStack
                    justify="center"
                    max
                >
                    <AvatarDeprecated
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
                    <TextDeprecated
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    {articleInfo.map((info, index) => (
                        <HStack
                            gap="8"
                            key={index}
                        >
                            <IconDeprecated Svg={info.icon} />
                            <TextDeprecated text={info.text} />
                        </HStack>
                    ))}
                </VStack>
                {article?.blocks.map(renderArticleBlock)}
            </div>
        )
    }

    const Redesigned: FC = () => (
        <div className={styles.articleRedesigned}>
            <VStack
                gap="16"
                max
            >
                <Text
                    title={article?.title}
                    bold
                    size="l"
                />
                <Text title={article?.subtitle} />

                <AppImage
                    src={article?.img}
                    alt={article?.title}
                    className={styles.img}
                    objectFit="contain"
                    fallbackHeight={400}
                />
                {article?.blocks.map(renderArticleBlock)}
            </VStack>
        </div>
    )

    return (
        <article
            className={classNames(styles.article, [className])}
            data-testid={DATA_TEST_ID.article}
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Redesigned />}
                off={<Deprecated />}
            />
        </article>
    )
})
