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
import { UserRole } from '@/5entities/User'
import { AppRoutes, routePaths } from '@/6shared/const/router'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: routePaths.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: routePaths.about,
    element: <AboutPage />
  },
  [AppRoutes.PROFILE]: {
    path: `${routePaths.profile}/:profileId`,
    element: <ProfilePage />,
    isPrivate: true
  },
  [AppRoutes.ARTICLES]: {
    path: routePaths.articles,
    element: <ArticlesPage />,
    isPrivate: true
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${routePaths['article-details']}/:articleId`,
    element: <ArticleDetailsPage />,
    isPrivate: true
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: `${routePaths['article-create']}`,
    element: <ArticleEditPage />,
    isPrivate: true
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${routePaths['article-edit']}/:articleId/edit`,
    element: <ArticleEditPage />,
    isPrivate: true
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: `${routePaths['admin-panel']}`,
    element: <AdminPanelPage />,
    isPrivate: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER]
  },
  [AppRoutes.FORBIDDEN]: {
    path: `${routePaths.forbidden}`,
    element: <ForbiddenPage />,
    isPrivate: true
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: routePaths['not-found'],
    element: <NotFoundPage />
  }
}
