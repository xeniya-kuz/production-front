import { classNames, type Mods } from '@/6shared/lib/classNames/classNames'
import { getFeatureFlag, toggleFeatures } from '@/6shared/lib/features'
import { useInitialEffect } from '@/6shared/lib/hooks'
import {
    type FC,
    memo,
    useCallback,
    useMemo,
    useRef,
    type HTMLAttributeAnchorTarget,
    type JSX,
} from 'react'
import { VirtuosoGrid, type VirtuosoGridHandle } from 'react-virtuoso'
import { type Article } from '../../../model/types/article'
import { Footer, Skeleton, View, WrappedHeader } from './components'
import styles from './Tiles.module.scss'

interface TilesProps {
    className?: string
    articles: Article[]
    onLoadNextArticles?: () => void
    Header?: FC
    target?: HTMLAttributeAnchorTarget
    selectedArticleId: number
    isLoading?: boolean
    virtualized?: boolean
    direction?: 'row'
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

type ArticlesNewDesignElement = Article & { __skeleton?: true }

export const Tiles = memo(function Tiles(props: TilesProps): JSX.Element {
    const {
        className,
        articles,
        Header,
        onLoadNextArticles,
        target,
        selectedArticleId,
        isLoading,
        virtualized,
        direction,
        handleButtonClick,
        articleViews,
        articleTypes,
        articleImage,
    } = props
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null)
    const isAppRedesigned = getFeatureFlag('isAppRedesigned')

    const timeout = useCallback(() => {
        setTimeout(() => {
            if (virtuosoGridRef.current) {
                virtuosoGridRef.current.scrollToIndex(selectedArticleId)
            } else {
                timeout()
            }
        }, 1000)
    }, [selectedArticleId])

    useInitialEffect(() => {
        timeout()
    })

    const articlesWithSkeletons = (
        index: number,
        article: ArticlesNewDesignElement,
    ): JSX.Element =>
        article.__skeleton ? (
            <Skeleton key={index} />
        ) : (
            <View
                article={article}
                target={target}
                className={styles.tile}
                key={index}
                handleButtonClick={handleButtonClick}
                articleViews={articleViews}
                articleTypes={articleTypes}
                articleImage={articleImage}
                index={index}
            />
        )

    const mods: Mods = {
        [styles.row]: direction && isAppRedesigned,
    }

    const articlesNewDesignData: ArticlesNewDesignElement[] = useMemo(() => {
        if (isLoading && !articles.length) {
            return [...articles, ...Array(9).fill({ __skeleton: true })]
        }

        if (isLoading) {
            return [...articles, ...Array(3).fill({ __skeleton: true })]
        }

        return articles
    }, [isLoading, articles])

    const gridData = isAppRedesigned ? articlesNewDesignData : articles

    if (virtualized) {
        return (
            <div className={classNames(styles.tilesContainer, [className])}>
                <VirtuosoGrid
                    style={{ width: '100%' }}
                    ref={virtuosoGridRef}
                    totalCount={gridData.length}
                    components={{
                        Header: () => <WrappedHeader Header={Header} />,
                        ScrollSeekPlaceholder: Skeleton,
                        Footer: () => (
                            <div className={classNames(styles.tiles)}>
                                <Footer
                                    isLoading={!!isLoading}
                                    isAppRedesigned={!!isAppRedesigned}
                                />
                            </div>
                        ),
                    }}
                    endReached={onLoadNextArticles}
                    data={gridData}
                    itemContent={articlesWithSkeletons}
                    listClassName={classNames(styles.tiles, [className], mods)}
                    scrollSeekConfiguration={{
                        enter: (velocity) => Math.abs(velocity) > 200,
                        exit: (velocity) => Math.abs(velocity) < 30,
                    }}
                    useWindowScroll={toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => true,
                        off: () => false,
                    })}
                />
            </div>
        )
    }

    return (
        <div className={classNames(styles.tilesContainer, [className])}>
            <WrappedHeader Header={Header} />
            <div className={classNames(styles.tiles, [], mods)}>
                {gridData.map((article, index) =>
                    articlesWithSkeletons(index, article),
                )}
                <Footer
                    isLoading={!!isLoading}
                    isAppRedesigned={!!isAppRedesigned}
                />
            </div>
        </div>
    )
})
