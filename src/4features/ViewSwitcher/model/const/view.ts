import { ArticleView } from '@/5entities/Article'
import { type ViewType } from '../types/view'
import { toggleFeatures } from '@/6shared/lib/features'
import ListIconDeprecated from '@/6shared/assets/icons/list-24-24.svg'
import TileIconDeprecated from '@/6shared/assets/icons/tile-24-24.svg'
import ListIcon from '@/6shared/assets/icons/burger.svg'
import TileIcon from '@/6shared/assets/icons/tile.svg'

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
