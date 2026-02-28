import { ArticleView } from '@/entities/Article'
import { type ViewType } from '../types/view'
import { toggleFeatures } from '@/shared/lib/features'
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg'
import TileIconDeprecated from '@/shared/assets/icons/tile-24-24.svg'
import ListIcon from '@/shared/assets/icons/burger.svg'
import TileIcon from '@/shared/assets/icons/tile.svg'

export const VIEW_TYPES: ViewType[] = [
    {
        view: ArticleView.LIST,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated,
        }),
    },
    {
        view: ArticleView.TILE,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => TileIcon,
            off: () => TileIconDeprecated,
        }),
    },
]
