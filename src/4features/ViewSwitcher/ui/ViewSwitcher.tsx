import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './ViewSwitcher.module.scss'
import { type FC, type JSX, memo, type SVGAttributes } from 'react'
import ListIconDeprecated from '@/6shared/assets/icons/list-24-24.svg'
import TileIconDeprecated from '@/6shared/assets/icons/tile-24-24.svg'
import ListIcon from '@/6shared/assets/icons/burger.svg'
import TileIcon from '@/6shared/assets/icons/tile.svg'
import { ArticleView } from '@/5entities/Article'
import {
    Icon as IconDeprecated,
    IconColors,
} from '@/6shared/ui/deprecated/Icon/Icon'
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/6shared/ui/deprecated/Button/Button'
import { toggleFeatures, ToggleFeatures } from '@/6shared/lib/features'
import { Icon } from '@/6shared/ui/redesigned/Icon'

interface ViewSwitcherProps {
    className?: string
    view: ArticleView
    onViewChange: (view: ArticleView) => void
}

interface ViewType {
    view: ArticleView
    icon: FC<SVGAttributes<SVGElement>>
}

const viewTypes: ViewType[] = [
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

export const ViewSwitcher = memo(function ArticlesViewSwitcher({
    className,
    view,
    onViewChange,
}: ViewSwitcherProps): JSX.Element {
    const onClick = (newView: ArticleView) => () => {
        onViewChange(newView)
    }

    const Content: FC<ViewType> = (viewType: ViewType) => (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon
                    Svg={viewType.icon}
                    buttonClassName={classNames(styles.button, [], {
                        [styles.selected]: viewType.view === view,
                    })}
                    clickable
                    onClick={onClick(viewType.view)}
                    hover={viewType.view !== view}
                    variant={viewType.view === view ? 'primary' : 'secondary'}
                />
            }
            off={
                <ButtonDeprecated
                    onClick={onClick(viewType.view)}
                    theme={ButtonTheme.CLEAR}
                >
                    <IconDeprecated
                        Svg={viewType.icon}
                        color={
                            viewType.view === view
                                ? IconColors.PRIMARY_FILL
                                : IconColors.SECONDARY_FILL
                        }
                        className={classNames(undefined, [], {
                            [styles.notSelected]: viewType.view !== view,
                        })}
                        width={24}
                        height={24}
                    />
                </ButtonDeprecated>
            }
        />
    )

    return (
        <div
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => styles.viewSwitcherRedesigned,
                    off: () => styles.viewSwitcher,
                }),
                [className],
            )}
        >
            {viewTypes.map((viewType) => (
                <Content
                    key={viewType.view}
                    {...viewType}
                />
            ))}
        </div>
    )
})
