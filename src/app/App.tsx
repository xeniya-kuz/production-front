import { Navbar } from '@/widgets/Navbar'
import { PageLoader } from '@/widgets/PageLoader'
import { Sidebar } from '@/widgets/Sidebar'
import { initAuthData, selectUserMounted } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch, useTheme } from '@/shared/lib/hooks'
import { type JSX, memo, Suspense, useEffect } from 'react'
import { AppRouter } from './providers/router'
import './styles/index.scss'

import {
    ARTICLE_LIST_ITEM_INDEX_LOCALSTORAGE_KEY,
    ARTICLE_VIEW_ITEM_INDEX_LOCALSTORAGE_KEY,
} from '@/shared/const/localstorage'
import { getRouteArticleDetails, getRouteArticles } from '@/shared/const/router'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useAppToolbar } from './lib/useAppToolbar'
import { withTheme } from './providers/ThemeProvider/ui/withTheme'
import {
    DEPRECATED_CLASSNAME,
    REDESIGNED_CLASSNAME,
} from '@/shared/const/general'

const App = memo(function App(): JSX.Element {
    const dispatch = useAppDispatch()
    const { theme } = useTheme()
    const isMounted = useSelector(selectUserMounted)
    const { pathname } = useLocation()
    const toolbar = useAppToolbar()

    useEffect(() => {
        if (!isMounted) {
            void dispatch(initAuthData())
        }

        if (
            !pathname.includes(getRouteArticles()) ||
            !pathname.includes(getRouteArticleDetails(':articleId'))
        ) {
            localStorage.removeItem(ARTICLE_LIST_ITEM_INDEX_LOCALSTORAGE_KEY)
            localStorage.removeItem(ARTICLE_VIEW_ITEM_INDEX_LOCALSTORAGE_KEY)
        }
    }, [dispatch, pathname, isMounted])

    const appStyles = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => REDESIGNED_CLASSNAME,
        off: () => DEPRECATED_CLASSNAME,
    })

    if (!isMounted) {
        return (
            <div
                id="app"
                className={classNames(appStyles, [theme])}
            >
                <PageLoader />
            </div>
        )
    }

    return (
        // Здесь Suspense нужен, т.к. переводы из i18n будут подгружаться чанками
        <Suspense fallback={<PageLoader />}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        id="app"
                        className={classNames(appStyles, [theme])}
                    >
                        <MainLayout
                            header={<Navbar />}
                            content={<AppRouter />}
                            sidebar={<Sidebar />}
                            toolbar={toolbar}
                        />
                    </div>
                }
                off={
                    <div
                        id="app"
                        className={classNames(appStyles, [theme])}
                    >
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            <AppRouter />
                        </div>
                    </div>
                }
            />
        </Suspense>
    )
})

export default withTheme(App)
