import { AppLink } from '@/6shared/ui/deprecated/AppLink/AppLink'
import { Card } from '@/6shared/ui/deprecated/Card/Card'
import { Text } from '@/6shared/ui/deprecated/Text/Text'
import { type HTMLAttributeAnchorTarget, type JSX, memo } from 'react'
import { type Article } from '../../../../model/types/article'
import styles from '../styles.module.scss'

import { getRouteArticleDetails } from '@/6shared/const/router'
import { DATA_TEST_ID } from '@/6shared/const/tests'

interface TileViewDeprecatedProps {
    article: Article
    target?: HTMLAttributeAnchorTarget
    className?: string
    index: number
    handleButtonClick: (index: number) => () => void
    articleViews: (props: {
        className: string
        article: Article
    }) => JSX.Element
    articleTypes: (props: {
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

/**
 * Устарел, используем новый компонент из папки TileView
 * @deprecated
 */
export const TileViewDeprecated = memo(function TileView({
    article,
    target,
    className,
    index,
    handleButtonClick,
    articleViews,
    articleTypes,
    articleImage,
}: TileViewDeprecatedProps): JSX.Element {
    return (
        <AppLink
            to={getRouteArticleDetails(article.id)}
            target={target}
            className={className}
            onClick={handleButtonClick(index)}
        >
            <Card
                className={styles.card}
                data-testid={DATA_TEST_ID.articleListItem}
            >
                <div className={styles.imageWrapper}>
                    {articleImage({
                        className: styles.img,
                        height: 200,
                        width: 200,
                        article,
                    })}
                    <Text
                        text={article.createdAt}
                        className={styles.date}
                    />
                </div>
                <div className={styles.infoWrapper}>
                    {articleTypes({ className: styles.types, article })}
                    {articleViews({ className: styles.views, article })}
                </div>
                <Text
                    text={article.title}
                    className={styles.title}
                />
            </Card>
        </AppLink>
    )
})
