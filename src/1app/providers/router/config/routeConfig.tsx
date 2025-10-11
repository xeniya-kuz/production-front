import { type AppRoutesProps } from '@/1app/types/router'
import { AboutPage } from '@/2pages/AboutPage'
import { AdminPanelPage } from '@/2pages/AdminPanelPage'
import { ArticleDetailsPage } from '@/2pages/ArticleDetailsPage'
import { ArticleEditPage } from '@/2pages/ArticleEditPage'
import { ArticlesPage } from '@/2pages/ArticlesPage'
import { ForbiddenPage } from '@/2pages/ForbiddenPage'
import { MainPage } from '@/2pages/MainPage'
import { NotFoundPage } from '@/2pages/NotFoundPage'
import { ProfilePage } from '@/2pages/ProfilePage'
import { SettingsPage } from '@/2pages/SettingsPage'
import { UserRole } from '@/5entities/User'
import {
    AppRoutes,
    getRouteAbout,
    getRouteAdmin,
    getRouteArticleCreate,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteArticles,
    getRouteForbidden,
    getRouteMain,
    getRouteProfile,
    getRouteSettings,
} from '@/6shared/const/router'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':profileId'),
        element: <ProfilePage />,
        isPrivate: true,
    },
    [AppRoutes.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        isPrivate: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: getRouteArticleDetails(':articleId'),
        element: <ArticleDetailsPage />,
        isPrivate: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        isPrivate: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(':articleId'),
        element: <ArticleEditPage />,
        isPrivate: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: getRouteAdmin(),
        element: <AdminPanelPage />,
        isPrivate: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
        isPrivate: true,
    },
    [AppRoutes.SETTINGS]: {
        path: getRouteSettings(),
        element: <SettingsPage />,
        isPrivate: true,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
}
