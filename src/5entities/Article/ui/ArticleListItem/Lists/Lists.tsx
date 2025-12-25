import { classNames } from '@/6shared/lib/classNames/classNames'

import { type HTMLAttributeAnchorTarget, memo, type JSX, type FC } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { Footer } from './Footer'
import styles from './Lists.module.scss'
import { type Article } from '../../../model/types/article'
import { toggleFeatures } from '@/6shared/lib/features'
import { ListView } from './ListView/ListView'
import { ListViewDeprecated } from './Deprecated/ListViewDeprecated/ListViewDeprecated'

interface ListsProps {
    className?: string
    articles: Article[]
    onLoadNextArticles?: () => void
    Header?: FC
    target?: HTMLAttributeAnchorTarget
    selectedArticleId: number
    isLoading?: boolean
    virtualized?: boolean
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

export const Lists = memo(function Lists(props: ListsProps): JSX.Element {
    const {
        className,
        articles,
        onLoadNextArticles,
        Header,
        target,
        selectedArticleId,
        isLoading,
        virtualized,
        handleButtonClick,
        articleViews,
        articleTypes,
        articleImage,
    } = props

    const View = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => ListView,
        off: () => ListViewDeprecated,
    })

    const renderArticle = (index: number, article: Article): JSX.Element => (
        <View
            article={article}
            target={target}
            className={styles.list}
            key={index}
            handleButtonClick={handleButtonClick}
            articleViews={articleViews}
            articleTypes={articleTypes}
            articleImage={articleImage}
            index={index}
        />
    )

    if (virtualized) {
        return (
            <Virtuoso
                data={articles}
                itemContent={renderArticle}
                endReached={onLoadNextArticles}
                initialTopMostItemIndex={selectedArticleId}
                components={{
                    Header,
                    Footer: () =>
                        isLoading ? (
                            <div data-test-id="virtuoso-item-list">
                                <Footer />
                            </div>
                        ) : null,
                }}
                className={classNames(styles.listsContainer, [className])}
                useWindowScroll={toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => true,
                    off: () => false,
                })}
            />
        )
    }

    return (
        <>
            {Header && <Header />}
            <div className={classNames(styles.listsContainer, [className])}>
                {articles.map((article, index) =>
                    renderArticle(index, article),
                )}
                {isLoading && <Footer />}
            </div>
        </>
    )
})
