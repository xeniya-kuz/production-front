import { classNames, type Mods } from '@/6shared/lib/classNames/classNames'
import { getFeatureFlag, toggleFeatures } from '@/6shared/lib/features'
import { useInitialEffect } from '@/6shared/lib/hooks'
import {
    memo,
    useCallback,
    useRef,
    type FC,
    type HTMLAttributeAnchorTarget,
    type JSX,
} from 'react'
import { VirtuosoGrid, type VirtuosoGridHandle } from 'react-virtuoso'
import { type Article } from '../../../model/types/article'
import styles from './Tiles.module.scss'
import { TileView } from './TileView/TileView'
import { TileViewDeprecated } from './Deprecated/TileViewDeprecated/TileViewDeprecated'
import { SkeletonTileViewDeprecated } from './Deprecated/SkeletonDeprecated/SkeletonTileViewDeprecated'
import { SkeletonTileView } from './Skeleton/SkeletonTileView'

interface TilesProps {
    className?: string
    articles: Article[]
    onLoadNextArticles?: () => void
    Header?: () => JSX.Element
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
            if (virtuosoGridRef.current !== null) {
                virtuosoGridRef.current.scrollToIndex(selectedArticleId)
            } else {
                timeout()
            }
        }, 1000)
    }, [selectedArticleId])

    const View = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => TileView,
        off: () => TileViewDeprecated,
    })

    const renderArticle = (index: number, article: Article): JSX.Element => (
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

    useInitialEffect(() => {
        timeout()
    })

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonTileView,
        off: () => SkeletonTileViewDeprecated,
    })

    const WrappedHeader: FC = () =>
        Header ? (
            <div className={styles.header}>
                <Header />
            </div>
        ) : (
            <></>
        )

    const mods: Mods = {
        [styles.row]: direction && isAppRedesigned,
    }

    if (isLoading) {
        return (
            <>
                <WrappedHeader />
                <div className={classNames(styles.tiles, [className], mods)}>
                    {new Array(9).fill(0).map((_, index) => (
                        <Skeleton key={index} />
                    ))}
                </div>
            </>
        )
    }

    if (virtualized) {
        return (
            <div className={classNames(styles.tilesContainer, [className])}>
                <VirtuosoGrid
                    style={{ width: '100%' }}
                    ref={virtuosoGridRef}
                    totalCount={articles.length}
                    // skeleton подставляется на каждый элемент
                    components={{
                        Header: WrappedHeader,
                        ScrollSeekPlaceholder: Skeleton,
                    }}
                    // эта строчка вызывает Warning: Can't perform a React state update on an unmounted component
                    endReached={onLoadNextArticles}
                    data={articles}
                    itemContent={renderArticle}
                    listClassName={classNames(styles.tiles, [className], mods)}
                    scrollSeekConfiguration={{
                        enter: (velocity) => Math.abs(velocity) > 200,
                        exit: (velocity) => Math.abs(velocity) < 30,
                    }}
                    //   scrollerRef={}
                />
            </div>
        )
    }

    return (
        <div className={classNames(styles.tilesContainer, [className])}>
            {Header && <Header />}
            <div className={classNames(styles.tiles, [], mods)}>
                {articles.map((article, index) =>
                    renderArticle(index, article),
                )}
            </div>
        </div>
    )
})
