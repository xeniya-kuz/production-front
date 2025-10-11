import { classNames } from '@/6shared/lib/classNames/classNames'
import { AppLink } from '@/6shared/ui/deprecated/AppLink/AppLink'
import { Avatar } from '@/6shared/ui/deprecated/Avatar/Avatar'
import { Button } from '@/6shared/ui/deprecated/Button/Button'
import { Card } from '@/6shared/ui/deprecated/Card/Card'
import { Text } from '@/6shared/ui/deprecated/Text/Text'
import { memo, type HTMLAttributeAnchorTarget, type JSX } from 'react'
import { useTranslation } from 'react-i18next'
import { type Article } from '../../../../../model/types/article'
import { ArticleTextBlock } from '../../../../ArticleTextBlock/ArticleTextBlock'
import styles from './ListViewDeprecated.module.scss'

import { getRouteArticleDetails } from '@/6shared/const/router'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { ArticleBlockType } from '../../../../../model/const/article'
import { HStack } from '@/6shared/ui/redesigned/Stack'

interface ListViewDeprecatedProps {
    article: Article
    target?: HTMLAttributeAnchorTarget
    index: number
    className?: string
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
 * Устарел, используем новый компонент из папки ListView
 * @deprecated
 */
export const ListViewDeprecated = memo(function ListView({
    article,
    target,
    index,
    className,
    handleButtonClick,
    articleTypes,
    articleViews,
    articleImage,
}: ListViewDeprecatedProps): JSX.Element {
    const { t } = useTranslation('buttons')

    const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT,
    )!

    return (
        <Card
            className={classNames(styles.card, [className])}
            data-testid={DATA_TEST_ID.articleListItem}
        >
            <HStack align="center">
                <Avatar
                    size={30}
                    src={article.user?.avatar}
                    alt="avatar"
                />
                <Text
                    text={article.user?.username}
                    className={styles.username}
                />
                <Text
                    text={article.createdAt}
                    className={styles.date}
                />
            </HStack>
            <Text
                title={article.title}
                className={styles.title}
            />
            {articleTypes({ className: styles.types, article })}
            {articleImage({
                className: styles.img,
                width: '100%',
                height: 250,
                article,
            })}
            {textBlock && (
                <ArticleTextBlock
                    block={textBlock}
                    className={styles.textBlock}
                />
            )}
            <div className={styles.footer}>
                <AppLink
                    to={getRouteArticleDetails(article.id)}
                    target={target}
                >
                    <Button onClick={handleButtonClick(index)}>
                        {t('read-more')}
                    </Button>
                </AppLink>
                {articleViews({ className: styles.views, article })}
            </div>
        </Card>
    )
})
