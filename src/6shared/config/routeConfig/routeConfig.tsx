import { AboutPage } from '2pages/AboutPage';
import { MainPage } from '2pages/MainPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePaths.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: routePaths.about,
    element: <AboutPage />,
  },
};
