import { Navbar } from '@/3widgets/Navbar'
import { PageLoader } from '@/3widgets/PageLoader'
import { Sidebar } from '@/3widgets/Sidebar'
import { initAuthData, selectUserMounted } from '@/5entities/User'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { useAppDispatch, useTheme } from '@/6shared/lib/hooks'
import { type JSX, memo, Suspense, useEffect } from 'react'
import { AppRouter } from './providers/router'
import './styles/index.scss'

import {
    ARTICLE_LIST_ITEM_INDEX_LOCALSTORAGE_KEY,
    ARTICLE_VIEW_ITEM_INDEX_LOCALSTORAGE_KEY,
} from '@/6shared/const/localstorage'
import {
    getRouteArticleDetails,
    getRouteArticles,
} from '@/6shared/const/router'
import { MainLayout } from '@/6shared/layouts/MainLayout'
import { toggleFeatures, ToggleFeatures } from '@/6shared/lib/features'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useAppToolbar } from './lib/useAppToolbar'
import { withTheme } from './providers/ThemeProvider/ui/withTheme'

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
        on: () => 'app_redesigned',
        off: () => 'app',
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
