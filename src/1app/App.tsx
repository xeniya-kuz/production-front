import { classNames } from '@/6shared/lib/classNames/classNames'
import { useAppDispatch } from '@/6shared/lib/hooks'
import { Navbar } from '@/3widgets/Navbar'
import { Sidebar } from '@/3widgets/Sidebar'
import { type JSX, Suspense, useEffect } from 'react'
import './styles/index.scss'
import { PageLoader } from '@/3widgets/PageLoader'
import { AppRouter } from './providers/router'
import { selectUserMounted, initAuthData } from '@/5entities/User'

import { useSelector } from 'react-redux'
import {
    ARTICLE_LIST_ITEM_INDEX_LOCALSTORAGE_KEY,
    ARTICLE_VIEW_ITEM_INDEX_LOCALSTORAGE_KEY,
} from '@/6shared/const/localstorage'
import { useLocation } from 'react-router-dom'
import {
    getRouteArticleDetails,
    getRouteArticles,
} from '@/6shared/const/router'

export default function App(): JSX.Element {
    const dispatch = useAppDispatch()
    const isMounted = useSelector(selectUserMounted)
    const { pathname } = useLocation()

    useEffect(() => {
        void dispatch(initAuthData())

        if (
            !pathname.includes(getRouteArticles()) ||
            !pathname.includes(getRouteArticleDetails(':articleId'))
        ) {
            localStorage.removeItem(ARTICLE_LIST_ITEM_INDEX_LOCALSTORAGE_KEY)
            localStorage.removeItem(ARTICLE_VIEW_ITEM_INDEX_LOCALSTORAGE_KEY)
        }
    }, [dispatch, pathname])

    // TODO: можно сделать скелетон старницы с хедером и сайдбаром
    if (!isMounted) {
        return <PageLoader />
    }

    return (
        <div className={classNames('app')}>
            {/* Здесь Suspense нужен, т.к. переводы из i18n будут подгружаться чанками */}
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {isMounted && <AppRouter />}
                </div>
            </Suspense>
        </div>
    )
}
