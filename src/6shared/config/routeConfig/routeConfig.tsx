import { AboutPage } from '2pages/AboutPage'
import { ArticleDetailsPage } from '2pages/ArticleDetailsPage'
import { ArticleEditPage } from '2pages/ArticleEditPage'
import { ArticlesPage } from '2pages/ArticlesPage'
import { MainPage } from '2pages/MainPage'
import { NotFoundPage } from '2pages/NotFoundPage'
import { ProfilePage } from '2pages/ProfilePage'
import { type RouteProps } from 'react-router-dom'

export type AppRoutesProps = RouteProps & {
  isPrivate?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article-details',
  ARTICLE_CREATE = 'article-create',
  ARTICLE_EDIT = 'article-edit',
  // last
  NOT_FOUND = 'not-found',
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile', // + :id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles', // + :id
  [AppRoutes.ARTICLE_CREATE]: '/articles',
  [AppRoutes.ARTICLE_EDIT]: '/articles',
  // last
  [AppRoutes.NOT_FOUND]: '*'
}

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
    path: `${routePaths['article-create']}/new`,
    element: <ArticleEditPage />,
    isPrivate: true
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${routePaths['article-edit']}/:articleId/edit`,
    element: <ArticleEditPage />,
    isPrivate: true
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: routePaths['not-found'],
    element: <NotFoundPage />
  }
}
