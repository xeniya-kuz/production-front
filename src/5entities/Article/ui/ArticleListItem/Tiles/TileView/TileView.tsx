import { AppLink } from '@/6shared/ui/redesigned/AppLink'
import { Card } from '@/6shared/ui/redesigned/Card'
import { Text } from '@/6shared/ui/redesigned/Text'
import { type HTMLAttributeAnchorTarget, type JSX, memo } from 'react'
import { type Article } from '../../../../model/types/article'
import styles from './TileView.module.scss'

import { getRouteArticleDetails } from '@/6shared/const/router'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack'
import { Avatar } from '@/6shared/ui/redesigned/Avatar'

interface TileViewProps {
    article: Article
    target?: HTMLAttributeAnchorTarget
    index: number
    className?: string
    handleButtonClick: (index: number) => () => void
    articleViews: (props: {
        className: string
        article: Article
    }) => JSX.Element
    articleImage: (props: {
        width: number | string
        height: number | string
        className: string
        article: Article
    }) => JSX.Element
}

export const TileView = memo(function TileView({
    article,
    target,
    index,
    className,
    handleButtonClick,
    articleViews,
    articleImage,
}: TileViewProps): JSX.Element {
    return (
        <AppLink
            to={getRouteArticleDetails(article.id)}
            target={target}
            className={className}
            onClick={handleButtonClick(index)}
        >
            <Card
                data-testid={DATA_TEST_ID.articleListItem}
                radius="round"
                padding="0"
                className={styles.card}
            >
                {articleImage({
                    className: styles.img,
                    height: '100%',
                    width: '100%',
                    article,
                })}

                <Text
                    text={article.title}
                    className={styles.title}
                />
                <VStack
                    gap="4"
                    max
                >
                    <HStack
                        justify="between"
                        max
                        className={styles.info}
                    >
                        <Text text={article.createdAt} />
                        {articleViews({
                            className: '',
                            article,
                        })}
                    </HStack>
                    <HStack
                        gap="4"
                        className={styles.footer}
                    >
                        <Avatar
                            size={32}
                            src={article.user.avatar ?? ''}
                            alt="user avatar"
                        />
                        <Text
                            bold
                            text={article.user.username}
                        />
                    </HStack>
                </VStack>
            </Card>
        </AppLink>
    )
})
