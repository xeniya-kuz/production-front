import { AboutPage } from '2pages/AboutPage'
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
  // last
  NOT_FOUND = 'not_found',
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
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
    path: routePaths.profile,
    element: <ProfilePage />,
    isPrivate: true
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: routePaths.not_found,
    element: <NotFoundPage />
  }
}
