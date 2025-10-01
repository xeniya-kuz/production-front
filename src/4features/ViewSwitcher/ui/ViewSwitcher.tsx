import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './ViewSwitcher.module.scss'
import { type JSX, memo } from 'react'
import ListIcon from '@/6shared/assets/icons/list-24-24.svg'
import TileIcon from '@/6shared/assets/icons/tile-24-24.svg'
import { ArticleView } from '@/5entities/Article'
import { Icon, IconColors } from '@/6shared/ui/Icon/Icon'
import { Button, ButtonTheme } from '@/6shared/ui/Button/Button'

interface ViewSwitcherProps {
    className?: string
    view: ArticleView
    onViewChange: (view: ArticleView) => void
}

const viewTypes = [
    { view: ArticleView.TILE, icon: TileIcon },
    { view: ArticleView.LIST, icon: ListIcon },
]

export const ViewSwitcher = memo(function ArticlesViewSwitcher({
    className,
    view,
    onViewChange,
}: ViewSwitcherProps): JSX.Element {
    const onClick = (newView: ArticleView) => () => {
        onViewChange(newView)
    }

    return (
        <div className={classNames(undefined, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    onClick={onClick(viewType.view)}
                    theme={ButtonTheme.CLEAR}
                >
                    <Icon
                        Svg={viewType.icon}
                        color={
                            viewType.view === view
                                ? IconColors.PRIMARY_FILL
                                : IconColors.SECONDARY_FILL
                        }
                        className={classNames(undefined, [], {
                            [styles.notSelected]: viewType.view !== view,
                        })}
                    />
                </Button>
            ))}
        </div>
    )
})
