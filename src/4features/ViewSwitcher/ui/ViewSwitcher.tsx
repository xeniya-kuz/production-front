import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './ViewSwitcher.module.scss'
import { type FC, type JSX, memo } from 'react'

import { ArticleView, DEFAULT_ARTICLE_VIEW } from '@/5entities/Article'
import {
    Icon as IconDeprecated,
    IconColors,
} from '@/6shared/ui/deprecated/Icon'
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/6shared/ui/deprecated/Button'
import { toggleFeatures, ToggleFeatures } from '@/6shared/lib/features'
import { Icon } from '@/6shared/ui/redesigned/Icon'
import { saveJsonSettings, useJsonSettings } from '@/5entities/User'
import { useAppDispatch } from '@/6shared/lib/hooks'
// TODO: fix
// eslint-disable-next-line fsd-path-checker-sia355/layer-imports, fsd-path-checker-sia355/public-api-imports
import { articleInfiniteListActions } from '@/4features/ArticleInfiniteList/model/slice/articleInfiniteListSlice' // цикл зависимости
import { type ViewType } from '../model/types/view'
import { VIEW_TYPES } from '../model/const/view'

interface ViewSwitcherProps {
    className?: string
    view?: ArticleView
    fetchData: () => void
}

export const ViewSwitcher = memo(function ArticlesViewSwitcher({
    className,
    view: viewProp,
    fetchData,
}: ViewSwitcherProps): JSX.Element {
    const dispatch = useAppDispatch()
    const { articlesView = DEFAULT_ARTICLE_VIEW } = useJsonSettings()
    const view = viewProp ?? articlesView

    const onClick = (newView: ArticleView) => () => {
        void dispatch(saveJsonSettings({ articlesView: newView })).then(() => {
            dispatch(
                articleInfiniteListActions.setLimit({
                    view: newView,
                }),
            )
            fetchData()
        })
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
                    // TODO: translate
                    title={view === ArticleView.LIST ? 'Список' : 'Плитка'}
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
            {VIEW_TYPES.map((viewType) => (
                <Content
                    key={viewType.view}
                    {...viewType}
                />
            ))}
        </div>
    )
})
