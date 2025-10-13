import { AppLink } from '@/6shared/ui/redesigned/AppLink'
import { Avatar } from '@/6shared/ui/redesigned/Avatar'
import { Button } from '@/6shared/ui/redesigned/Button'
import { Text } from '@/6shared/ui/redesigned/Text'
import { type HTMLAttributeAnchorTarget, type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type Article } from '../../../../model/types/article'
import styles from './ListView.module.scss'

import { getRouteArticleDetails } from '@/6shared/const/router'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { Card } from '@/6shared/ui/redesigned/Card'
import { ArticleBlockType } from '../../../../model/const/article'
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack'
import { AppImage } from '@/6shared/ui/redesigned/AppImage'

export interface ListViewProps {
    article: Article
    target?: HTMLAttributeAnchorTarget
    index: number
    className?: string
    handleButtonClick: (index: number) => () => void
    articleViews: (props: {
        className: string
        article: Article
    }) => JSX.Element
}

export const ListView = memo(function ListView({
    article,
    target,
    className,
    index,
    handleButtonClick,
    articleViews,
}: ListViewProps): JSX.Element {
    const { t } = useTranslation('buttons')

    const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT,
    )!

    return (
        <Card
            data-testid={DATA_TEST_ID.articleListItem}
            className={className}
            padding="24"
        >
            <VStack gap="16">
                <VStack
                    gap="8"
                    max
                >
                    <HStack gap="8">
                        <Avatar
                            size={32}
                            src={article.user?.avatar}
                            alt="avatar"
                            username={article.user?.username}
                            gap="8"
                        />
                        <Text text={article.createdAt} />
                    </HStack>
                    <Text
                        bold
                        title={article.title}
                    />
                </VStack>

                <Text
                    title={article.subtitle}
                    size="s"
                />

                <AppImage
                    src={article.img}
                    alt={article.title}
                    className={styles.img}
                    fallbackHeight={420}
                />
                {textBlock && (
                    <Text
                        text={textBlock.paragraphs[0]}
                        className={styles.textBlock}
                    />
                )}
                <HStack
                    max
                    justify="between"
                >
                    <AppLink
                        to={getRouteArticleDetails(article.id)}
                        target={target}
                    >
                        <Button
                            onClick={handleButtonClick(index)}
                            variant="outline"
                            size="l"
                        >
                            {t('read-more')}
                        </Button>
                    </AppLink>
                    {articleViews({ className: '', article })}
                </HStack>
            </VStack>
        </Card>
    )
})
