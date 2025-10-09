import { type ArticleView, DEFAULT_ARTICLE_VIEW } from '@/5entities/Article'
import { saveJsonSettings, useJsonSettings } from '@/5entities/User'
import { useAppDispatch } from '@/6shared/lib/hooks'
import { memo, useCallback } from 'react'
import { ViewSwitcher } from './ViewSwitcher'

interface ViewSelectorContainerProps {
    className?: string
    fetchData: () => void
}

export const ViewSwitcherContainer = memo(function ViewSelectorContainer({
    className,
    fetchData,
}: ViewSelectorContainerProps) {
    const dispatch = useAppDispatch()
    const { articlesView = DEFAULT_ARTICLE_VIEW } = useJsonSettings()

    const onViewChange = useCallback(
        (view: ArticleView) => {
            void dispatch(saveJsonSettings({ articlesView: view })).then(() => {
                fetchData()
            })
        },
        [dispatch, fetchData],
    )

    return (
        <ViewSwitcher
            className={className}
            view={articlesView}
            onViewChange={onViewChange}
        />
    )
})
