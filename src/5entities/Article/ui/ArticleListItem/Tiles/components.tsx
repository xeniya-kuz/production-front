import { toggleFeatures } from '@/6shared/lib/features'
import { type FC } from 'react'
import { SkeletonTileViewDeprecated } from './Deprecated/SkeletonDeprecated/SkeletonTileViewDeprecated'
import { TileViewDeprecated } from './Deprecated/TileViewDeprecated/TileViewDeprecated'
import { SkeletonTileView } from './Skeleton/SkeletonTileView'
import styles from './Tiles.module.scss'
import { TileView } from './TileView/TileView'

export const View = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => TileView,
    off: () => TileViewDeprecated,
})

export const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonTileView,
    off: () => SkeletonTileViewDeprecated,
})

export const WrappedHeader: FC<{ Header?: FC }> = ({ Header }) =>
    Header ? (
        <div className={styles.header}>
            <Header />
        </div>
    ) : (
        <></>
    )

export const Footer: FC<{ isLoading: boolean; isAppRedesigned: boolean }> = ({
    isLoading,
    isAppRedesigned,
}) =>
    isLoading && !isAppRedesigned
        ? new Array(3).fill(0).map((_, index) => <Skeleton key={index} />)
        : null
